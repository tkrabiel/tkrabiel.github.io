let counter = 0;

// --- DROPDOWN LOGIC ---
function toggleDropdown(id) {
    document.getElementById(id).classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function addKnownEducation(schoolType) {
    const levelSelect = document.getElementById('master_level'); 
    const levelKey = levelSelect.value === "Level I" ? "S5A" : "S5B";
    
    const allTags = masterData[levelKey]
        .filter(item => item.type === "I") 
        .map(item => `@${item.id} []`)
        .join("\n");

    let data = {};
    if (schoolType === 'UNH') {
        data = { f_name: "University of New Hampshire", j_title: "IHO CAT-A Certificate Program", j_cert: "IHO CAT-A", j_proj: allTags };
    } else if (schoolType === 'USM') {
        data = { f_name: "University of Southern Mississippi", j_title: "IHO CAT-A Certificate Program", j_cert: "IHO CAT-A", j_proj: allTags };
    } else if (schoolType === 'CATB') {
        data = { f_name: "Generic Institution", j_title: "IHO CAT-B Certificate Program", j_cert: "IHO CAT-B", j_proj: allTags };
    }
    
    addEducationalEngagement(data);
}

// --- TRACKER LOGIC ---
function toggleTracker() {
    const panel = document.getElementById('trackerPanel');
    const container = document.getElementById('mainContainer');
    panel.classList.toggle('open');
    if(panel.classList.contains('open')) {
        container.style.marginRight = '370px'; 
        updateTracker(); 
    } else {
        container.style.marginRight = 'auto';
    }
}

function updateTracker() {
    if(!document.getElementById('trackerPanel').classList.contains('open')) return;

    const levelSelect = document.getElementById('master_level'); 
    const levelKey = levelSelect.value === "Level I" ? "S5A" : "S5B";
    const dataList = masterData[levelKey] || masterData["S5B"];
    
    const requiredItems = dataList.filter(item => item.type === "I");
    const total = requiredItems.length;
    
    let allText = "";
    document.querySelectorAll('.engagement-block').forEach(block => {
        const fields = ['.j_proj', '.j_resp', '.j_comments', '.j_title', '.p_abstract', '.pr_deliv', '.reason_leave'];
        fields.forEach(f => {
            const el = block.querySelector(f);
            if(el) allText += " " + el.value;
        });
    });
    
    const regex = /@([A-Za-z0-9.]+)\s*\[/g;
    let match;
    const foundRaw = new Set();
    while ((match = regex.exec(allText)) !== null) {
        foundRaw.add(match[1].toLowerCase()); 
    }
    
    let completed = [];
    let missing = [];
    requiredItems.forEach(item => {
        if(foundRaw.has(item.id.toLowerCase())) {
            completed.push(item);
        } else {
            missing.push(item);
        }
    });
    
    const percentage = total === 0 ? 0 : Math.round((completed.length / total) * 100);
    document.getElementById('tracker-progress-fill').style.width = percentage + '%';
    document.getElementById('tracker-status-text').innerText = `${completed.length} / ${total} Completed (${percentage}%)`;
    
    const showCompleted = document.getElementById('toggleCompleted').checked;
    let htmlContent = "";

    if (missing.length === 0) {
        htmlContent += "<div style='color:green; font-weight:bold; padding: 10px 0;'>All competencies completed!</div>";
    } else {
        htmlContent += missing.map(m => {
            const extraInfo = m.info ? m.info : "No detailed learning outcomes provided.";
            return `
                <div class="tracker-item missing">
                    <strong>${m.id}</strong>: ${m.desc}
                    <div class="tooltip-text">${extraInfo}</div>
                </div>`;
        }).join('');
    }

    if (showCompleted && completed.length > 0) {
        htmlContent += completed.map(c => {
            const extraInfo = c.info ? c.info : "No detailed learning outcomes provided.";
            return `
                <div class="tracker-item completed">
                    <strong>${c.id}</strong>: ${c.desc}
                    <div class="tooltip-text">${extraInfo}</div>
                </div>`;
        }).join('');
    }

    document.getElementById('tracker-missing-list').innerHTML = htmlContent;
}

// --- MATH ENGINE ---
function calculateMonths(d1, d2) {
    if (!d1 || !d2) return 0;
    const start = new Date(d1);
    const end = new Date(d2);
    if (end < start) return 0;
    
    const diffDays = (end - start) / (1000 * 60 * 60 * 24);
    const exactMonths = diffDays / 30;
    return Math.ceil(exactMonths * 100) / 100;
}

function calculateDuration(element) {
    const block = element.closest('.engagement-block');
    if (!block) return;
    
    const fromVal = block.querySelector('.d_from').value;
    const toVal = block.querySelector('.d_to').value;
    const displaySpan = block.querySelector('.duration-display');

    if (!fromVal || !toVal) return;

    const totalMonths = calculateMonths(fromVal, toVal);
    if (displaySpan) displaySpan.innerText = totalMonths.toFixed(2);

    const numInputs = block.querySelectorAll('input[type="number"]');
    numInputs.forEach(input => {
        input.max = totalMonths;
        input.onchange = function() {
            let val = parseFloat(this.value);
            if (val > totalMonths) {
                alert(`Error: Value cannot exceed the total duration (${totalMonths} months).`);
                this.value = totalMonths;
            }
        };
    });
}

function autoExpand(textarea) {
    textarea.style.height = 'inherit';
    const computed = window.getComputedStyle(textarea);
    const height = textarea.scrollHeight + 
                   parseInt(computed.getPropertyValue('border-top-width')) + 
                   parseInt(computed.getPropertyValue('border-bottom-width'));
    textarea.style.height = height + 'px';
}

// --- FORM BUILDERS ---
function addEducationalEngagement(data = null) {
    counter++;
    const list = document.getElementById('engagement-list');
    const id = counter;

    const template = `
        <div class="engagement-block educational-bg" id="eng_${id}" data-type="EE">
            <div class="engagement-header">
                <span>EDUCATIONAL ENGAGEMENT DETAIL # <span class="display_e_number">${id}</span></span>
                <button class="btn btn-delete" onclick="removeEng(this)">Remove Engagement</button>
            </div>
            
            <div class="inner-padding" style="padding: 15px;">
                <div class="row">
                    <div class="table-box">
                        <span class="box-title">INSTITUTION</span>
                        <label>Name:</label> <input type="text" class="f_name" value="${data?.f_name || ''}">
                        <label>Address:</label> <input type="text" class="f_addr" value="${data?.f_addr || ''}">
                        <label>Email:</label> <input type="email" class="f_email" value="${data?.f_email || ''}">
                        <label>Telephone:</label> <input type="text" class="f_tel" value="${data?.f_tel || ''}">
                    </div>
                    <div class="table-box">
                        <span class="box-title">CONTACT</span>
                        <label>Name:</label> <input type="text" class="s_name" value="${data?.s_name || ''}">
                        <label>Address:</label> <input type="text" class="s_addr" value="${data?.s_addr || ''}">
                        <label>Email:</label> <input type="email" class="s_email" value="${data?.s_email || ''}">
                        <label>Telephone:</label> <input type="text" class="s_tel" value="${data?.s_tel || ''}">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label>From Date:</label> 
                        <input type="date" class="d_from" value="${data?.d_from || ''}" onchange="calculateDuration(this)">
                    </div>
                    <div class="col">
                        <label>To Date:</label> 
                        <input type="date" class="d_to" value="${data?.d_to || ''}" onchange="calculateDuration(this)">
                    </div>
                </div>

                <div class="row">
                    <div class="col" style="background: #e9ecef; padding: 10px; border-radius: 4px; margin: 10px 15px;">
                        <label style="margin:0; display:inline-block;">TOTAL MONTHS:</label>
                        <span class="duration-display" style="font-size: 16px; font-weight: bold; color: #004a99; margin-left: 10px;">
                            ${data ? calculateMonths(data.d_from, data.d_to).toFixed(2) : '0'}
                        </span>
                        <div style="font-size: 10px; color: #666; font-weight: normal; margin-top: 4px;">(1 month = 30 days, rounded up to nearest 0.01)</div>
                    </div>
                </div>

                <div class="row">
                    <div class="col"><label>Detail of any breaks or gaps during this period:</label> 
                    <textarea class="d_gaps" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.d_gaps || ''}</textarea></div>
                </div>

                <div class="row">
                    <div class="col"><label>Program Title:</label> 
                    <textarea class="j_title" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_title || ''}</textarea></div>
                </div>
                <div class="row">
		            <div class="col"><label>Certificate Awarded:</label> 
                    <textarea class="j_cert" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_cert || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="col"><label>Detailed Description of Program (Type @ to search competencies):</label> 
                    <textarea class="j_proj" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_proj || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="col"><label>Additional Comments:</label> 
                    <textarea class="j_comments" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_comments || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="table-box">
                        <div class="col"><label>Non-Related or Education:</label> <input type="number" class="Edu_number" min="0" step="0.01" value="${data?.Edu_number || ''}"></div>
                        <div class="col"><label>Surveying, Engineering, Not Hydrography:</label> <input type="number" class="not_hydro_eng" min="0" step="0.01" value="${data?.not_hydro_eng || ''}"></div>
                    </div>                    
                </div>
                
                <hr style="margin: 20px 0; border: 1px dashed #ccc;">
                <div style="display: flex; justify-content: flex-end;">
                    <button class="btn" style="background: #6c757d;" type="button" onclick="exportSingleBlock(this)">⬇️ Export Block to JSON</button>
                </div>
            </div>
        </div>`;
    list.insertAdjacentHTML('beforeend', template);
    
    const newBlock = document.getElementById(`eng_${id}`);
    const jProj = newBlock.querySelector('.j_proj');
    if(jProj && jProj.value) autoExpand(jProj);
    
    updateTracker(); 
}

function addProjectEngagement(data = null) {
    counter++;
    const list = document.getElementById('engagement-list');
    const id = counter;

    const template = `
        <div class="engagement-block project-bg" id="eng_${id}" data-type="PE">
            <div class="engagement-header">
                <span>PROJECT ENGAGEMENT DETAIL # <span class="display_e_number">${id}</span></span>
                <button class="btn btn-delete" onclick="removeEng(this)">Remove Engagement</button>
            </div>
            
            <div class="inner-padding" style="padding: 15px;">
                <div class="row">
                    <div class="table-box">
                        <span class="box-title">FIRM</span>
                        <label>Name:</label> <input type="text" class="f_name" value="${data?.f_name || ''}">
                        <label>Address:</label> <input type="text" class="f_addr" value="${data?.f_addr || ''}">
                        <label>Email:</label> <input type="email" class="f_email" value="${data?.f_email || ''}">
                        <label>Telephone:</label> <input type="text" class="f_tel" value="${data?.f_tel || ''}">
                    </div>
                    <div class="table-box">
                        <span class="box-title">SUPERVISOR</span>
                        <label>Name:</label> <input type="text" class="s_name" value="${data?.s_name || ''}">
                        <label>Address:</label> <input type="text" class="s_addr" value="${data?.s_addr || ''}">
                        <label>Email:</label> <input type="email" class="s_email" value="${data?.s_email || ''}">
                        <label>Telephone:</label> <input type="text" class="s_tel" value="${data?.s_tel || ''}">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label>From Date:</label> 
                        <input type="date" class="d_from" value="${data?.d_from || ''}" onchange="calculateDuration(this)">
                    </div>
                    <div class="col">
                        <label>To Date:</label> 
                        <input type="date" class="d_to" value="${data?.d_to || ''}" onchange="calculateDuration(this)">
                    </div>
                </div>
                <div class="row">
                    <div class="col" style="background: #e9ecef; padding: 10px; border-radius: 4px; margin: 10px 15px;">
                        <label style="margin:0; display:inline-block;">TOTAL MONTHS:</label>
                        <span class="duration-display" style="font-size: 16px; font-weight: bold; color: #004a99; margin-left: 10px;">
                            ${data ? calculateMonths(data.d_from, data.d_to).toFixed(2) : '0'}
                        </span>
                        <div style="font-size: 10px; color: #666; font-weight: normal; margin-top: 4px;">(1 month = 30 days, rounded up to nearest 0.01)</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col"><label>Detail of gaps during this period:</label> <textarea class="d_gaps" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.d_gaps || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="col"><label>Job Title:</label> <textarea class="j_title" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_title || ''}</textarea></div>
                    <div class="col"><label>Geographic Location:</label> <input type="text" class="geo_loc" value="${data?.geo_loc || ''}"></div>
                </div>
                <div class="row">
                    <div class="col"><label>Reason for leaving or termination:</label> <textarea class="reason_leave" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.reason_leave || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="col"><label>Responsibilities & Duties (Type @ to search competencies):</label> <textarea class="j_resp" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_resp || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="col"><label>Detailed Project Descriptions (Type @ to search competencies):</label> <textarea class="j_proj" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_proj || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="col"><label>Equipment Used:</label> <textarea class="j_equip" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_equip || ''}</textarea></div>
                    <div class="col"><label>Software Used:</label> <textarea class="j_soft" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_soft || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="table-box">
                        <div class="col"><label>Non-Related or Education:</label> <input type="number" class="Edu_number" min="0" step="0.01" value="${data?.Edu_number || ''}"></div>
                        <div class="col"><label>Surveying, Engineering, Not Hydrography:</label> <input type="number" class="not_hydro_eng" min="0" step="0.01" value="${data?.not_hydro_eng || ''}"></div>
                        <div class="col"><label>Hydrography:</label> <input type="number" class="Hydro_time" min="0" step="0.01" value="${data?.Hydro_time || ''}"></div>
                        <div class="col"><label>Hydrography in Field:</label> <input type="number" class="H_in_field" min="0" step="0.01" value="${data?.H_in_field || ''}"></div>
                        <div class="col"><label>Hydrography in Technical Charge:</label> <input type="number" class="H_charge" min="0" step="0.01" value="${data?.H_charge || ''}"></div>
                    </div>                
                </div>
                
                <hr style="margin: 20px 0; border: 1px dashed #ccc;">
                <div style="display: flex; justify-content: flex-end;">
                    <button class="btn" style="background: #6c757d;" type="button" onclick="exportSingleBlock(this)">⬇️ Export Block to JSON</button>
                </div>
            </div>
        </div>`;
    list.insertAdjacentHTML('beforeend', template);
    updateTracker(); 
}

function addProjectReportEngagement(data = null) {
    counter++;
    const list = document.getElementById('engagement-list');
    const id = counter;

    const template = `
        <div class="engagement-block project-bg" id="eng_${id}" data-type="PR" style="border-color: #17a2b8;">
            <div class="engagement-header" style="background: #17a2b8;">
                <span>PROJECT REPORT DETAIL # <span class="display_e_number">${id}</span></span>
                <button class="btn btn-delete" onclick="removeEng(this)">Remove Engagement</button>
            </div>
            
            <div class="inner-padding" style="padding: 15px;">
                <div class="row">
                    <div class="table-box">
                        <span class="box-title">FIRM</span>
                        <label>Name:</label> <input type="text" class="f_name" value="${data?.f_name || ''}">
                        <label>Address:</label> <input type="text" class="f_addr" value="${data?.f_addr || ''}">
                        <label>Email:</label> <input type="email" class="f_email" value="${data?.f_email || ''}">
                        <label>Telephone:</label> <input type="text" class="f_tel" value="${data?.f_tel || ''}">
                    </div>
                    <div class="table-box">
                        <span class="box-title">SUPERVISOR</span>
                        <label>Name:</label> <input type="text" class="s_name" value="${data?.s_name || ''}">
                        <label>Address:</label> <input type="text" class="s_addr" value="${data?.s_addr || ''}">
                        <label>Email:</label> <input type="email" class="s_email" value="${data?.s_email || ''}">
                        <label>Telephone:</label> <input type="text" class="s_tel" value="${data?.s_tel || ''}">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label>From Date:</label> 
                        <input type="date" class="d_from" value="${data?.d_from || ''}" onchange="calculateDuration(this)">
                    </div>
                    <div class="col">
                        <label>To Date:</label> 
                        <input type="date" class="d_to" value="${data?.d_to || ''}" onchange="calculateDuration(this)">
                    </div>
                </div>
                <div class="row">
                    <div class="col" style="background: #e9ecef; padding: 10px; border-radius: 4px; margin: 10px 15px;">
                        <label style="margin:0; display:inline-block;">TOTAL MONTHS:</label>
                        <span class="duration-display" style="font-size: 16px; font-weight: bold; color: #004a99; margin-left: 10px;">
                            ${data ? calculateMonths(data.d_from, data.d_to).toFixed(2) : '0'}
                        </span>
                        <div style="font-size: 10px; color: #666; font-weight: normal; margin-top: 4px;">(1 month = 30 days, rounded up to nearest 0.01)</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col"><label>Detail of gaps during this period:</label> <textarea class="d_gaps" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.d_gaps || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="col"><label>Job Title:</label> <textarea class="j_title" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_title || ''}</textarea></div>
                    <div class="col"><label>Geographic Location:</label> <input type="text" class="geo_loc" value="${data?.geo_loc || ''}"></div>
                </div>
                <div class="row">
                    <div class="col"><label>Reason for leaving or termination:</label> <textarea class="reason_leave" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.reason_leave || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="col"><label>Responsibilities & Duties (Type @ to search competencies):</label> <textarea class="j_resp" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_resp || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="col"><label>Detailed Project Descriptions (Type @ to search competencies):</label> <textarea class="j_proj" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_proj || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="col"><label>Equipment Used:</label> <textarea class="j_equip" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_equip || ''}</textarea></div>
                    <div class="col"><label>Software Used:</label> <textarea class="j_soft" rows="1" oninput="autoExpand(this)" style="overflow:hidden; resize:none; min-height: 30px;">${data?.j_soft || ''}</textarea></div>
                </div>
                <div class="row">
                    <div class="table-box">
                        <div class="col"><label>Non-Related or Education:</label> <input type="number" class="Edu_number" min="0" step="0.01" value="${data?.Edu_number || ''}"></div>
                        <div class="col"><label>Surveying, Engineering, Not Hydrography:</label> <input type="number" class="not_hydro_eng" min="0" step="0.01" value="${data?.not_hydro_eng || ''}"></div>
                        <div class="col"><label>Hydrography:</label> <input type="number" class="Hydro_time" min="0" step="0.01" value="${data?.Hydro_time || ''}"></div>
                        <div class="col"><label>Hydrography in Field:</label> <input type="number" class="H_in_field" min="0" step="0.01" value="${data?.H_in_field || ''}"></div>
                        <div class="col"><label>Hydrography in Technical Charge:</label> <input type="number" class="H_charge" min="0" step="0.01" value="${data?.H_charge || ''}"></div>
                    </div>                
                </div>
                <hr style="margin: 20px 0; border: 1px solid #17a2b8;">
                <div class="row">
                    <div class="col">
                        <label style="color: #17a2b8; font-size: 14px;">Project Abstract:</label> 
                        <textarea class="p_abstract" rows="3" oninput="autoExpand(this)" style="overflow:hidden; resize:none; border-color: #17a2b8; min-height: 50px;">${data?.p_abstract || ''}</textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label style="color: #17a2b8; font-size: 14px;">Deliverables:</label> 
                        <textarea class="pr_deliv" rows="3" oninput="autoExpand(this)" style="overflow:hidden; resize:none; border-color: #17a2b8; min-height: 50px;">${data?.pr_deliv || ''}</textarea>
                    </div>
                </div>

                <hr style="margin: 20px 0; border: 1px dashed #ccc;">
                <div style="display: flex; justify-content: flex-end;">
                    <button class="btn" style="background: #6c757d;" type="button" onclick="exportSingleBlock(this)">⬇️ Export Block to JSON</button>
                </div>
            </div>
        </div>`;
    list.insertAdjacentHTML('beforeend', template);
    updateTracker(); 
}

// --- DATA MANAGEMENT ---
function removeEng(buttonElement) {
    if(confirm("Are you sure you want to delete this engagement record?")) {
        const block = buttonElement.closest('.engagement-block');
        if (block) block.remove();
        reindexEngagements();
        updateTracker(); 
    }
}

function reindexEngagements() {
    const blocks = document.querySelectorAll('.engagement-block');
    counter = blocks.length;
    blocks.forEach((block, index) => {
        const newNumber = index + 1;
        block.id = `eng_${newNumber}`;
        const displaySpan = block.querySelector('.display_e_number');
        if (displaySpan) displaySpan.innerText = newNumber;
    });
}

function saveAllToJSON() {
    const blocks = document.querySelectorAll('.engagement-block');
    const engagements = Array.from(blocks).map((block, index) => {
        const type = block.getAttribute('data-type') || 'PE';
        let entry = {
            e_number: (index + 1).toString(),
            engagement_type: type,
            f_name: block.querySelector('.f_name').value,
            f_addr: block.querySelector('.f_addr').value,
            s_name: block.querySelector('.s_name').value,
            s_addr: block.querySelector('.s_addr').value,
            d_from: block.querySelector('.d_from').value,
            d_to: block.querySelector('.d_to').value,
            j_title: block.querySelector('.j_title').value,
            j_proj: block.querySelector('.j_proj').value,
            d_gaps: block.querySelector('.d_gaps').value,
            f_email: block.querySelector('.f_email').value,
            f_tel: block.querySelector('.f_tel').value,
            s_email: block.querySelector('.s_email').value,
            s_tel: block.querySelector('.s_tel').value,
            Edu_number: block.querySelector('.Edu_number').value,
            not_hydro_eng: block.querySelector('.not_hydro_eng').value
        };

        if (type === 'EE') {
            entry.j_cert = block.querySelector('.j_cert').value;
            entry.j_comments = block.querySelector('.j_comments').value;
        } else {
            entry.j_resp = block.querySelector('.j_resp').value;
            entry.j_equip = block.querySelector('.j_equip').value;
            entry.j_soft = block.querySelector('.j_soft').value;
            entry.Hydro_time = block.querySelector('.Hydro_time').value;
            entry.H_in_field = block.querySelector('.H_in_field').value;
            entry.H_charge = block.querySelector('.H_charge').value;
            
            const geoLocInput = block.querySelector('.geo_loc');
            entry.geo_loc = geoLocInput ? geoLocInput.value : "";
            
            const reasonLeaveInput = block.querySelector('.reason_leave');
            entry.reason_leave = reasonLeaveInput ? reasonLeaveInput.value : "";
            
            if (type === 'PR') {
                entry.p_abstract = block.querySelector('.p_abstract').value;
                entry.pr_deliv = block.querySelector('.pr_deliv').value;
            }
        }
        return entry;
    });

    const output = {
        applicant: document.getElementById('master_name').value,
        email: document.getElementById('email').value,
        level: document.getElementById('master_level').value,
        data: engagements
    };

    const blob = new Blob([JSON.stringify(output, null, 4)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    
    const safeName = (output.applicant || 'Unknown_Applicant').replace(/\s+/g, '_');
    const safeLevel = (output.level || 'Unknown_Level').replace(/\s+/g, '_');
    const now = new Date();
    const utcTime = now.toISOString().replace(/[-:T]/g, '_').split('.')[0] + 'UTC';

    link.download = `${safeName}_${safeLevel}_application_${utcTime}.json`;
    link.click();
}

function loadFromJSON(event) {
    const reader = new FileReader();
    reader.onload = function(e) { populateForm(JSON.parse(e.target.result)); };
    reader.readAsText(event.target.files[0]);
}

function populateForm(json) {
    document.getElementById('master_name').value = json.applicant || '';
    document.getElementById('email').value = json.email || '';
    document.getElementById('master_level').value = json.level || '';
    document.getElementById('engagement-list').innerHTML = ''; 
    counter = 0;
    if (json.data && json.data.length > 0) {
        json.data.forEach(item => {
            if(item.engagement_type === 'EE') addEducationalEngagement(item);
            else if(item.engagement_type === 'PR') addProjectReportEngagement(item);
            else addProjectEngagement(item);
        });
    } else {
        addProjectEngagement();
    }
    
    document.querySelectorAll('textarea').forEach(t => {
        if(t.value) autoExpand(t);
    });
    
    updateTracker(); 
}

// --- SINGLE BLOCK EXPORT & IMPORT LOGIC ---
function exportSingleBlock(buttonElement) {
    const block = buttonElement.closest('.engagement-block');
    const type = block.getAttribute('data-type') || 'PE';
    
    let entry = {
        engagement_type: type,
        f_name: block.querySelector('.f_name').value,
        f_addr: block.querySelector('.f_addr').value,
        s_name: block.querySelector('.s_name').value,
        s_addr: block.querySelector('.s_addr').value,
        d_from: block.querySelector('.d_from').value,
        d_to: block.querySelector('.d_to').value,
        j_title: block.querySelector('.j_title').value,
        j_proj: block.querySelector('.j_proj').value,
        d_gaps: block.querySelector('.d_gaps').value,
        f_email: block.querySelector('.f_email').value,
        f_tel: block.querySelector('.f_tel').value,
        s_email: block.querySelector('.s_email').value,
        s_tel: block.querySelector('.s_tel').value,
        Edu_number: block.querySelector('.Edu_number').value,
        not_hydro_eng: block.querySelector('.not_hydro_eng').value
    };

    if (type === 'EE') {
        entry.j_cert = block.querySelector('.j_cert').value;
        entry.j_comments = block.querySelector('.j_comments').value;
    } else {
        entry.j_resp = block.querySelector('.j_resp').value;
        entry.j_equip = block.querySelector('.j_equip').value;
        entry.j_soft = block.querySelector('.j_soft').value;
        entry.Hydro_time = block.querySelector('.Hydro_time').value;
        entry.H_in_field = block.querySelector('.H_in_field').value;
        entry.H_charge = block.querySelector('.H_charge').value;
        
        const geoLocInput = block.querySelector('.geo_loc');
        entry.geo_loc = geoLocInput ? geoLocInput.value : "";
        
        const reasonLeaveInput = block.querySelector('.reason_leave');
        entry.reason_leave = reasonLeaveInput ? reasonLeaveInput.value : "";
            
        if (type === 'PR') {
            entry.p_abstract = block.querySelector('.p_abstract').value;
            entry.pr_deliv = block.querySelector('.pr_deliv').value;
        }
    }

    const blob = new Blob([JSON.stringify(entry, null, 4)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    
    const safeTitle = (entry.j_title || type).replace(/\s+/g, '_');
    link.download = `Template_${type}_${safeTitle}.json`;
    link.click();
}

function loadSingleBlockJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) { 
        try {
            const parsedData = JSON.parse(e.target.result);
            if (parsedData.engagement_type === 'EE') {
                addEducationalEngagement(parsedData);
            } else if (parsedData.engagement_type === 'PR') {
                addProjectReportEngagement(parsedData);
            } else {
                addProjectEngagement(parsedData);
            }
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); 
            updateTracker();
        } catch (err) {
            alert("Error: Invalid Single Block JSON file.");
        }
    };
    reader.readAsText(file);
    event.target.value = ""; 
}

// --- AUTOCOMPLETE @ LOGIC ---
let currentMatchState = { active: false, startIndex: -1, textObj: null };

document.addEventListener('input', function(e) {
    if (e.target.tagName.toLowerCase() === 'textarea' || e.target.tagName.toLowerCase() === 'input') {
        updateTracker();
    }
    if (e.target.tagName.toLowerCase() === 'textarea') {
        handleAutocomplete(e.target);
    }
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.autocomplete-items')) closeDropdowns();
});

function handleAutocomplete(textarea) {
    const val = textarea.value;
    const cursorPos = textarea.selectionStart;
    const textBeforeCursor = val.substring(0, cursorPos);
    const match = textBeforeCursor.match(/@([a-zA-Z0-9.]*)$/);

    closeDropdowns();

    if (match) {
        currentMatchState = { active: true, startIndex: match.index, textObj: textarea };
        
        const levelSelect = document.getElementById('master_level'); 
        const levelKey = levelSelect.value === "Level I" ? "S5A" : "S5B";
        const searchStr = match[1].toLowerCase();
        const dataList = masterData[levelKey] || masterData["S5B"];
        
        const filtered = dataList.filter(item => 
            item.id && 
            item.type === "I" && 
            (item.id.toLowerCase().includes(searchStr) || item.desc.toLowerCase().includes(searchStr))
        );

        if (filtered.length > 0) showDropdown(textarea, filtered, searchStr);
    } else {
        currentMatchState.active = false;
    }
}

function showDropdown(textarea, list, searchStr) {
    if (window.getComputedStyle(textarea.parentNode).position === 'static') {
        textarea.parentNode.style.position = 'relative';
    }

    const dropdown = document.createElement("div");
    dropdown.setAttribute("class", "autocomplete-items");
    dropdown.style.top = (textarea.offsetTop + textarea.offsetHeight) + "px";
    dropdown.style.left = textarea.offsetLeft + "px";
    dropdown.style.width = textarea.offsetWidth + "px";
    
    list.forEach(item => {
        const div = document.createElement("div");
        const regex = new RegExp("(" + searchStr + ")", "gi");
        const displayId = item.id.replace(regex, "<strong>$1</strong>");
        
        div.innerHTML = `${displayId} - ${item.desc}`;
        div.addEventListener("click", function() { insertTag(item.id); });
        dropdown.appendChild(div);
    });

    textarea.parentNode.appendChild(dropdown);
}

function insertTag(id) {
    if (!currentMatchState.active) return;
    const textarea = currentMatchState.textObj;
    const val = textarea.value;
    const start = currentMatchState.startIndex;
    const end = textarea.selectionStart;
    
    const insertText = `@${id} [] `;
    textarea.value = val.substring(0, start) + insertText + val.substring(end);
    
    const newCursorPos = start + insertText.length - 2;
    textarea.focus();
    textarea.setSelectionRange(newCursorPos, newCursorPos);
    
    closeDropdowns();
    updateTracker(); 
}

function closeDropdowns() {
    const items = document.querySelectorAll(".autocomplete-items");
    items.forEach(item => item.parentNode.removeChild(item));
}

window.onload = function() {
    const transferData = localStorage.getItem('cst_data_transfer');
    if (transferData) {
        try {
            const parsedData = JSON.parse(transferData);
            populateForm(parsedData);
            localStorage.removeItem('cst_data_transfer');
        } catch (e) {
            console.error("Error parsing transferred data:", e);
            addProjectEngagement();
        }
    } else {
        addProjectEngagement();
    }
};