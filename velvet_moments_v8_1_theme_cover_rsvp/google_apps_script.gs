// Velvet Moments RSVP collector
// This version writes directly to the user's Google Sheet.
// Sheet columns expected in row 1: Name | Will they join | No of guest
// 1. Open the Google Sheet.
// 2. Extensions -> Apps Script.
// 3. Paste this code.
// 4. Deploy -> New deployment -> Web app.
// 5. Execute as: Me.
// 6. Who has access: Anyone.
// 7. Copy the /exec URL into Velvet Moments -> Invitation Editor -> RSVP Google Apps Script URL.

const SPREADSHEET_ID = "14L_mpKYP0EFNBIe6-l7ZWsH6xLpcyKkuU2i9j54vFNE";

function getTargetSheet_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheets = ss.getSheets();
  if (!sheets.length) throw new Error("No sheet found in the spreadsheet.");
  return sheets[0];
}

function doPost(e) {
  const sheet = getTargetSheet_();
  let data = {};
  try {
    data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
  } catch (err) {
    data = {};
  }

  const name = String(data.name || "").trim();
  const response = String(data.response || "").trim();
  const guests = Number(data.guests || 1);

  if (!name || !response) {
    return ContentService
      .createTextOutput(JSON.stringify({ok:false, error:"Name and attendance response are required."}))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Keep the sheet exactly aligned with the user's requested columns.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Name", "Will they join", "No of guest"]);
  }

  sheet.appendRow([name, response, guests]);

  return ContentService
    .createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput("Velvet Moments RSVP endpoint is active.")
    .setMimeType(ContentService.MimeType.TEXT);
}
