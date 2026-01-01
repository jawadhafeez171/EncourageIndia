export const submitToGoogleSheet = async (data: Record<string, string>) => {
  // INSTRUCTIONS:
  // 1. Create a Google Sheet
  // 2. Go to Extensions > Apps Script
  // 3. Paste the following code into the script editor:
  /*
    function doPost(e) {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      var nextRow = sheet.getLastRow() + 1;
      var newRow = headers.map(function(header) {
        return e.parameter[header] || "";
      });
      sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
      return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    }
  */
  // 4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
  // 5. Paste the Web App URL below
  const GOOGLE_SCRIPT_URL: string = 'https://script.google.com/macros/s/AKfycbyLMwE5ligHUeusL8mVIF9rWFjnPvRbLiN9AC9D-geMS2dyN-3GSjhDGPj4H1ZNuiAl4Q/exec';
  
  if (GOOGLE_SCRIPT_URL === 'https://script.google.com/macros/s/AKfycbyLMwE5ligHUeusL8mVIF9rWFjnPvRbLiN9AC9D-geMS2dyN-3GSjhDGPj4H1ZNuiAl4Q/exec' || GOOGLE_SCRIPT_URL.includes('YOUR_GOOGLE_SCRIPT_URL')) {
      // Logic for testing or if user hasn't updated yet
  }

  // Using URLSearchParams ensures the data is sent as application/x-www-form-urlencoded
  // which Google Apps Script parses into e.parameter automatically.
  const params = new URLSearchParams();
  for (const key in data) {
    params.append(key, data[key]);
  }
  
  // Append timestamp
  params.append('SubmissionDate', new Date().toLocaleString());

  // Using no-cors mode because Google Apps Script redirects often cause CORS issues in browsers.
  // Note: headers cannot be customized in no-cors mode, but URLSearchParams body 
  // automatically sets the correct Content-Type.
  return fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    body: params,
    mode: 'no-cors'
  });
};