let activeJSON = null;

document.getElementById('jsonInput').onchange = function(e) {
    const reader = new FileReader();
    reader.onload = (event) => {
        activeJSON = JSON.parse(event.target.result);
        renderTable();
    };
    reader.readAsText(e.target.files[0]);
};

function renderTable() {
    const levelKey = document.getElementById('levelSelect').value;
    const tbody = document.getElementById('tableBody');
    const title = document.getElementById('formTitle');
    const subtitle = document.getElementById('formSubtitle');
    
    title.innerText = `Competency Form ${levelKey === 'S5A' ? 'S-5A' : 'S-5B'}`;
    subtitle.innerText = levelKey === 'S5A' ? 'Level 1 - Certified Master Hydrographer (CMH)' : 'Level 2 - Certified Hydrographer (CH)';
    tbody.innerHTML = "";

    const tagMap = {};
    const validIds = {};
    
    masterData[levelKey].forEach(item => {
        if(item.id) validIds[item.id.toLowerCase()] = item.id;
    });

    if (activeJSON && activeJSON.data) {
        activeJSON.data.forEach(eng => {
            const searchableText = [
                eng.j_proj, eng.j_resp, eng.j_comments, eng.j_title
            ].filter(Boolean).join(" ");
            
            const regex = /@([A-Za-z0-9.]+)\s*\[([\s\S]*?)\]/g;
            let match;
            
            while ((match = regex.exec(searchableText)) !== null) {
                const rawId = match[1].toLowerCase();
                const correctId = validIds[rawId]; 
                
                if (correctId) {
                    if (!tagMap[correctId]) tagMap[correctId] = { engs: new Set(), details: [] };
                    tagMap[correctId].engs.add(eng.e_number);
                    tagMap[correctId].details.push(`(Eng #${eng.e_number}): ${match[2].trim()}`);
                }
            }
        });
    }

    masterData[levelKey].forEach(item => {
        const userData = tagMap[item.id] || null;
        const row = document.createElement('tr');
        
        if (item.type === "H") {
            row.className = "header-row";
            row.innerHTML = `<td colspan="4">${item.desc}</td>`;
        } else if (item.type === "S") {
            row.className = "subheader-row";
            row.innerHTML = `<td class="id-col">${item.id}</td><td colspan="3">${item.desc}</td>`;
        } else {
            if (userData) row.className = "highlight";
            
            row.innerHTML = `
                <td class="id-col">${item.id}</td>
                <td class="desc-col">${item.desc}</td>
                <td class="eng-col" contenteditable="true">${userData ? Array.from(userData.engs).sort((a,b)=>a-b).join(", ") : ""}</td>
                <td class="detail-col" contenteditable="true">${userData ? userData.details.join("<br><br>") : ""}</td>
            `;
        }
        tbody.appendChild(row);
    });
}

// Initial draw when the script loads
renderTable();