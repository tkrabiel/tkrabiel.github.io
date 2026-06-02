
# NSPS-THSOA Master Application Portal

The NSPS-THSOA Master Application Portal is a client-side web application designed to streamline the certification application process for professional hydrographers (Level 1 CMH and Level 2 CH).

Because this application handles sensitive professional information, **it utilizes a zero-server architecture**. No data is ever transmitted to or saved on a remote server. Instead, the application acts as a local processor, saving all user progress locally as a Master `.json` file, which is then used to generate heavily formatted Word Documents (`.docx`), CSV spreadsheets, and Competency matrices.

---

## 📂 Project Architecture

The application is fully modular, separating structure, style, and logic for enterprise-grade maintainability:

* **`index.html`**: The landing page outlining the program and instructions.
* **`styles.css`**: The universal stylesheet governing the UI across all pages.
* **`competency_data.js`**: The master database array containing all S-5A and S-5B competency IDs, descriptions, and learning outcomes.
* **`application_editor.html` & `editor.js**`: The primary workspace. Allows users to add, edit, and track Project Engagements (PE), Project Reports (PR), and Educational Engagements (EE).
* **`export.html` & `export.js**`: The document generation engine. Reads the Master JSON and injects the data into official NSPS `.docx` templates using `docxtemplater` and `pizzip`.
* **`competency_form.html` & `competency_form.js**`: Automatically parses the JSON for competency tags and generates the official mapped competency matrix for printing.

---

## 🔄 Core Workflow

1. **Build the Application:** The user opens `application_editor.html` and fills out their information, adding modules for Projects, Reports, and Education.
2. **Tag Competencies:** Inside text areas (like Responsibilities or Descriptions), users type `@` to search and insert competency tags (e.g., `@B1.1 [Applied math to survey]`). The sidebar tracker automatically updates to show missing vs. completed requirements.
3. **Save the Data:** The user clicks **Save JSON**. This downloads the Master JSON file to their hard drive.
4. **Export Documents:** The user navigates to `export.html`, uploads their saved Master JSON, and generates official Word Documents and a CSV Experience Summary.

---

## 🗂️ The Master JSON Data Structure (Detailed Schema)

The core of this entire application is the Master JSON file. When a user clicks "Save JSON", the application serializes the workspace into the following structured format.

### 1. Root Object

The top level of the JSON file contains the applicant's global metadata and the array of their engagements.

| Key | Type | Description |
| --- | --- | --- |
| `applicant` | String | The full name of the candidate. |
| `email` | String | The candidate's email address. |
| `level` | String | The certification level sought (e.g., `"Level I"` or `"Level II"`). |
| `data` | Array | A collection of **Engagement Objects** (detailed below). |

### 2. Engagement Object (Base Fields)

Every item inside the `data` array represents a single engagement block. Regardless of whether it is a Project, Report, or Education, it will contain these base fields:

| Key | Type | Description |
| --- | --- | --- |
| `e_number` | String | The chronological ID number of the engagement (e.g., `"1"`, `"2"`). |
| `engagement_type` | String | Determines the template used. `"PE"` (Project), `"PR"` (Report), or `"EE"` (Education). |
| `f_name` | String | Name of the Firm or Educational Institution. |
| `f_addr` | String | Address of the Firm or Institution. |
| `f_email` | String | Email of the Firm or Institution. |
| `f_tel` | String | Phone number of the Firm or Institution. |
| `s_name` | String | Name of the Supervisor or Institutional Contact. |
| `s_addr` | String | Address of the Supervisor / Contact. |
| `s_email` | String | Email of the Supervisor / Contact. |
| `s_tel` | String | Phone number of the Supervisor / Contact. |
| `d_from` | String | Start date in `YYYY-MM-DD` format. |
| `d_to` | String | End date in `YYYY-MM-DD` format. |
| `d_gaps` | String | Details of any gaps or breaks in employment/education. |
| `j_title` | String | Job Title or Program Title. |
| `j_proj` | String | Detailed description of the project or educational program. |
| `Edu_number` | String | Months credited to Non-Related or Education. |
| `not_hydro_eng` | String | Months credited to Surveying/Engineering (Not Hydrography). |

### 3. Type-Specific Fields

Depending on the `engagement_type`, the object will contain additional specific fields.

#### If `engagement_type` is `"PE"` (Project Engagement):

| Key | Type | Description |
| --- | --- | --- |
| `geo_loc` | String | The geographic location of the project. |
| `reason_leave` | String | The reason for leaving or termination. |
| `j_resp` | String | Responsibilities and duties held by the candidate. |
| `j_equip` | String | Equipment used during the project. |
| `j_soft` | String | Software used during the project. |
| `Hydro_time` | String | Months credited to Hydrography general. |
| `H_in_field` | String | Months credited to Hydrography in the Field. |
| `H_charge` | String | Months credited to Hydrography in Technical Charge. |

#### If `engagement_type` is `"PR"` (Project Report):

*Contains all fields from `"PE"`, plus:*

| Key | Type | Description |
| --- | --- | --- |
| `p_abstract` | String | The project abstract. |
| `pr_deliv` | String | The project deliverables. |

#### If `engagement_type` is `"EE"` (Educational Engagement):

| Key | Type | Description |
| --- | --- | --- |
| `j_cert` | String | Certificate or Degree awarded. |
| `j_comments` | String | Additional educational comments. |

---

## 📄 Document Generation & Template Engine

The `export.html` page uses a "Hybrid Fallback" system for generating Microsoft Word documents.

1. **Auto/Manual Templates (`docxtemplater`):** If official `.docx` templates (`PE_Template.docx`, `EE_Template.docx`, `PR_Template.docx`) are present in the local server directory, or if the user manually uploads one via the override input, the system uses `docxtemplater`. It unzips the Word file, replaces bracketed tags (e.g., `{f_name}`, `{applicant}`) with the exact JSON data, and generates a pixel-perfect clone for *each* engagement.
2. **Classic Generation (`docx.js`):** If no templates are provided, the system falls back to generating a single, compiled `.docx` file from scratch using the raw `docx.js` API.

### Available Template Tags

If you are modifying the official Word documents to serve as templates, wrap the exact JSON keys listed in the schema above in curly braces to inject data.

*Example: `{f_name}`, `{d_from}`, `{j_resp}`, `{applicant}`.*