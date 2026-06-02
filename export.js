let activeData = null;
let manualTemplateContent = null; 

// Import the required elements from the DOCX library (for the classic fallback generation)
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType, PageBreak } = docx;

// --- FILE UPLOAD HANDLERS ---
document.getElementById('jsonInput').onchange = function(e) {
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            activeData = JSON.parse(event.target.result);
            document.getElementById('status').innerText = "JSON Data successfully parsed!";
            document.getElementById('file-meta').innerText = `Applicant: ${activeData.applicant || 'Unknown'} | Entries: ${activeData.data.length}`;
        } catch (err) { 
            alert("Invalid JSON file."); 
        }
    };
    reader.readAsText(e.target.files[0]);
};

document.getElementById('templateInput').onchange = function(e) {
    if (!e.target.files.length) {
        manualTemplateContent = null;
        document.getElementById('template-meta').innerText = "";
        return;
    }
    const reader = new FileReader();
    reader.onload = function(event) {
        manualTemplateContent = event.target.result; 
        document.getElementById('template-meta').innerText = `Template Override Active: "${e.target.files[0].name}" loaded!`;
    };
    reader.readAsArrayBuffer(e.target.files[0]);
};

// --- HELPER FUNCTIONS FOR CLEANING TEXT ---
function stripCompetencyTags(text) {
    if (!text) return "N/A"; 
    let cleaned = text.replace(/@([a-zA-Z0-9.]+)/g, '$1');
    return cleaned.trim() === "" ? "N/A" : cleaned;
}

function createMultiLineParagraphs(text) {
    if (!text) return [new Paragraph({ text: "N/A", spacing: { after: 200 } })];
    const cleanText = stripCompetencyTags(text);
    const lines = cleanText.split('\n');
    return lines.map(line => new Paragraph({ 
        text: line.trim(), 
        spacing: { after: 120 } 
    }));
}

// --- CSV GENERATOR ---
function generateExcel() {
    if (!activeData) return alert("Please upload a JSON file first.");
    const headers = ["Engagement Number", "Title and Organization", "Start Date (mm/yyyy)", "End Date (mm/yyyy)", "Months", "Non-Related or Education", "Surveying Engineering Not Hydrography", "Hydrography", "Hydrography in Technical Charge", "Hydrography in Field", "Total Months"];
    let csvRows = [headers.join(",")];
    let totals = { edu: 0, surv: 0, hydro: 0, charge: 0, field: 0, all: 0 };

    for (let i = 1; i <= 20; i++) {
        const eng = activeData.data ? activeData.data.find(e => parseInt(e.e_number) === i) : null;
        if (eng) {
            const num = (v) => parseFloat(v) || 0;
            const rowTotal = num(eng.Edu_number) + num(eng.not_hydro_eng) + num(eng.Hydro_time);
            csvRows.push([i, `"${eng.j_title || ''} - ${eng.f_name || ''}"`, eng.d_from || '', eng.d_to || '', rowTotal, num(eng.Edu_number), num(eng.not_hydro_eng), num(eng.Hydro_time), num(eng.H_charge), num(eng.H_in_field), rowTotal].join(","));
            totals.edu += num(eng.Edu_number); totals.surv += num(eng.not_hydro_eng); totals.hydro += num(eng.Hydro_time); totals.charge += num(eng.H_charge); totals.field += num(eng.H_in_field); totals.all += rowTotal;
        } else { csvRows.push(`${i},,,,0,0,0,0,0,0,0`); }
    }
    csvRows.push(["Candidate Total", "", "", "", totals.all, totals.edu, totals.surv, totals.hydro, totals.charge, totals.field, totals.all].join(","));
    saveAs(new Blob([csvRows.join("\n")], { type: 'text/csv' }), `Experience_Summary_${activeData.applicant || 'Export'}.csv`);
}

// --- MAIN DOCUMENT GENERATOR (HYBRID SYSTEM) ---
async function generateDocs(filterType) {
    if (!activeData) return alert("Upload your Master JSON data first.");

    const targetEngagements = activeData.data.filter(e => e.engagement_type === filterType);
    if (targetEngagements.length === 0) return alert(`No ${filterType} entries found in JSON.`);

    const applicantName = activeData.applicant || "Applicant";
    const safeApplicantName = applicantName.replace(/\s+/g, '_');
    const isEdu = (filterType === 'EE');
    const isReport = (filterType === 'PR');

    // ==========================================
    // OPTION A: TEMPLATE OVERRIDE IS ACTIVE
    // ==========================================
    if (manualTemplateContent) {
        document.getElementById('status').innerText = `Using Template Override: Generating ${targetEngagements.length} individual ${filterType} Document(s)...`;

        targetEngagements.forEach(eng => {
            const templateData = {
                applicant: applicantName, 
                e_number: eng.e_number || "N/A",
                f_name: eng.f_name || "N/A",
                f_addr: eng.f_addr || "N/A",
                f_email: eng.f_email || "N/A",
                f_tel: eng.f_tel || "N/A",
                s_name: eng.s_name || "N/A",
                s_addr: eng.s_addr || "N/A",
                s_email: eng.s_email || "N/A",
                s_tel: eng.s_tel || "N/A",
                d_from: eng.d_from || "N/A",
                d_to: eng.d_to || "N/A",
                d_gaps: eng.d_gaps || "None",
                j_title: eng.j_title || "N/A",
                geo_loc: eng.geo_loc || "N/A", 
                reason_leave: eng.reason_leave || "N/A", // Added Mapping for Document Override tags
                
                j_resp: stripCompetencyTags(eng.j_resp),
                j_proj: stripCompetencyTags(eng.j_proj),
                j_equip: stripCompetencyTags(eng.j_equip),
                j_soft: stripCompetencyTags(eng.j_soft),
                
                Edu_number: eng.Edu_number || "0",
                not_hydro_eng: eng.not_hydro_eng || "0",
                Hydro_time: eng.Hydro_time || "0",
                H_in_field: eng.H_in_field || "0",
                H_charge: eng.H_charge || "0",
                
                j_cert: stripCompetencyTags(eng.j_cert),
                j_comments: stripCompetencyTags(eng.j_comments),
                p_abstract: stripCompetencyTags(eng.p_abstract),
                pr_deliv: stripCompetencyTags(eng.pr_deliv) 
            };

            try {
                const zip = new PizZip(manualTemplateContent);
                const doc = new window.docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                });

                doc.render(templateData);

                const out = doc.getZip().generate({
                    type: "blob",
                    mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                });

                saveAs(out, `${safeApplicantName}_${filterType}_Engagement_${eng.e_number}.docx`);
                
            } catch (error) {
                console.error("Template rendering error for Engagement #" + eng.e_number, error);
                alert(`Error rendering template details for Engagement #${eng.e_number}. Check console.`);
            }
        });

        document.getElementById('status').innerText = `Successfully processed and downloaded ${targetEngagements.length} templated document(s)!`;
    } 
    
    // ==========================================
    // OPTION B: NO TEMPLATE (CLASSIC FALLBACK)
    // ==========================================
    else {
        document.getElementById('status').innerText = `Generating classic all-in-one ${filterType} Document...`;
        
        const docChildren = [];

        for (let i = 0; i < targetEngagements.length; i++) {
            const eng = targetEngagements[i];

            if (i > 0) docChildren.push(new Paragraph({ children: [new PageBreak()] }));

            docChildren.push(new Paragraph({ 
                text: isEdu ? "EDUCATIONAL ENGAGEMENT DETAIL" : (isReport ? "PROJECT REPORT DETAIL" : "PROJECT ENGAGEMENT DETAIL"), 
                heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER 
            }));
            
            docChildren.push(new Paragraph({ 
                text: `Engagement #${eng.e_number} | Applicant: ${applicantName}`, 
                alignment: AlignmentType.CENTER, spacing: { after: 400 }
            }));

            docChildren.push(new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({ 
                                margins: { top: 100, bottom: 100, left: 100, right: 100 },
                                children: [
                                    new Paragraph({ text: isEdu ? "INSTITUTION" : "FIRM", bold: true, spacing: { after: 100 } }), 
                                    new Paragraph({ children: [new TextRun({ text: "NAME: ", bold: true }), new TextRun(eng.f_name || "N/A")] }), 
                                    new Paragraph({ children: [new TextRun({ text: "ADDRESS: ", bold: true }), new TextRun(eng.f_addr || "N/A")] }),
                                    new Paragraph({ children: [new TextRun({ text: "EMAIL: ", bold: true }), new TextRun(eng.f_email || "N/A")] }),
                                    new Paragraph({ children: [new TextRun({ text: "TELEPHONE: ", bold: true }), new TextRun(eng.f_tel || "N/A")] })
                                ] 
                            }),
                            new TableCell({ 
                                margins: { top: 100, bottom: 100, left: 100, right: 100 },
                                children: [
                                    new Paragraph({ text: isEdu ? "CONTACT" : "SUPERVISOR", bold: true, spacing: { after: 100 } }), 
                                    new Paragraph({ children: [new TextRun({ text: "NAME: ", bold: true }), new TextRun(eng.s_name || "N/A")] }), 
                                    new Paragraph({ children: [new TextRun({ text: "ADDRESS: ", bold: true }), new TextRun(eng.s_addr || "N/A")] }),
                                    new Paragraph({ children: [new TextRun({ text: "EMAIL: ", bold: true }), new TextRun(eng.s_email || "N/A")] }),
                                    new Paragraph({ children: [new TextRun({ text: "TELEPHONE: ", bold: true }), new TextRun(eng.s_tel || "N/A")] })
                                ] 
                            }),
                        ],
                    }),
                ],
            }));

            docChildren.push(new Paragraph({ 
                children: [
                    new TextRun({ text: "START DATE: ", bold: true }), new TextRun(`${eng.d_from || "N/A"}    `), 
                    new TextRun({ text: "END DATE: ", bold: true }), new TextRun(`${eng.d_to || "N/A"}    `),
                    new TextRun({ text: "GAPS/BREAKS: ", bold: true }), new TextRun(eng.d_gaps || "None")
                ], spacing: { before: 300, after: 200 } 
            }));

            docChildren.push(new Paragraph({ 
                children: [
                    new TextRun({ text: isEdu ? "PROGRAM TITLE: " : "JOB TITLE: ", bold: true }), 
                    new TextRun(eng.j_title || "N/A")
                ], spacing: { after: 100 }
            }));

            if (!isEdu) {
                docChildren.push(new Paragraph({ 
                    children: [
                        new TextRun({ text: "GEOGRAPHIC LOCATION: ", bold: true }), 
                        new TextRun(eng.geo_loc || "N/A")
                    ], spacing: { after: 100 }
                }));

                // Added visual render for Reason for Leaving in Classic mode
                docChildren.push(new Paragraph({ 
                    children: [
                        new TextRun({ text: "REASON FOR LEAVING/TERMINATION: ", bold: true }), 
                        new TextRun(eng.reason_leave || "N/A")
                    ], spacing: { after: 200 }
                }));
            } else {
                docChildren.push(new Paragraph({ spacing: { after: 100 } }));
            }

            if (isEdu) {
                docChildren.push(new Paragraph({ children: [new TextRun({ text: "CERTIFICATE/DEGREE AWARDED: ", bold: true }), new TextRun(eng.j_cert || "N/A")], spacing: { after: 200 } }));
                docChildren.push(new Paragraph({ children: [new TextRun({ text: "DETAILED DESCRIPTION OF PROGRAM:", bold: true, underline: { type: "single" }, size: 25 })], spacing: { after: 100 } }));
                docChildren.push(...createMultiLineParagraphs(eng.j_proj));
                if (eng.j_comments) {
                    docChildren.push(new Paragraph({ children: [new TextRun({ text: "ADDITIONAL COMMENTS:", bold: true, underline: { type: "single" }, size: 25 })], spacing: { after: 100, before: 200 } }));
                    docChildren.push(...createMultiLineParagraphs(eng.j_comments));
                }
            } else {
                docChildren.push(new Paragraph({ children: [new TextRun({ text: "RESPONSIBILITIES & DUTIES:", bold: true, underline: { type: "single" }, size: 25 })], spacing: { after: 100 } }));
                docChildren.push(...createMultiLineParagraphs(eng.j_resp));
                docChildren.push(new Paragraph({ children: [new TextRun({ text: "DETAILED PROJECT DESCRIPTION:", bold: true, underline: { type: "single" }, size: 25 })], spacing: { after: 100, before: 200 } }));
                docChildren.push(...createMultiLineParagraphs(eng.j_proj));
                docChildren.push(new Paragraph({ children: [new TextRun({ text: "EQUIPMENT USED:", bold: true, underline: { type: "single" }, size: 25 })], spacing: { after: 100, before: 200 } }));
                docChildren.push(new Paragraph({ text: stripCompetencyTags(eng.j_equip) || "N/A", spacing: { after: 200 } }));
                docChildren.push(new Paragraph({ children: [new TextRun({ text: "SOFTWARE USED:", bold: true, underline: { type: "single" }, size: 25 })], spacing: { after: 100 } }));
                docChildren.push(new Paragraph({ text: stripCompetencyTags(eng.j_soft) || "N/A", spacing: { after: 200 } }));
                
                if (isReport) {
                    docChildren.push(new Paragraph({ children: [new TextRun({ text: "PROJECT ABSTRACT:", bold: true, underline: { type: "single" }, size: 25 })], spacing: { after: 100, before: 300 } }));
                    docChildren.push(...createMultiLineParagraphs(eng.p_abstract));
                    
                    docChildren.push(new Paragraph({ children: [new TextRun({ text: "DELIVERABLES:", bold: true, underline: { type: "single" }, size: 25 })], spacing: { after: 100, before: 200 } }));
                    docChildren.push(...createMultiLineParagraphs(eng.pr_deliv));
                }
            }
        }

        const doc = new Document({ sections: [{ properties: {}, children: docChildren }] });

        let docTitle = "All_Project_Engagements";
        if (isEdu) docTitle = "All_Education_Engagements";
        if (isReport) docTitle = "All_Project_Reports";

        const blob = await Packer.toBlob(doc);
        saveAs(blob, `CST_${safeApplicantName}_${docTitle}.docx`);
        document.getElementById('status').innerText = `Classic ${docTitle}.docx downloaded successfully!`;
    }
}