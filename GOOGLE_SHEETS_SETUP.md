# Google Sheets Integration Setup & Verification

## Current Status

✅ **Service is configured** with a hardcoded Google Apps Script URL  
⚠️ **Cannot verify if it's working** due to `no-cors` mode (requests appear successful even if they fail)

## How to Verify It's Working

### Method 1: Check Your Google Sheet
1. Open your Google Sheet that's connected to the Apps Script
2. Submit a test form from your website
3. Check if a new row appears in the sheet

### Method 2: Check Browser Console
1. Open browser DevTools (F12)
2. Go to Console tab
3. Submit a form
4. Look for log message: `"Form submitted to Google Sheets:"`
5. Check Network tab to see if the request was sent

### Method 3: Test the URL Directly
Open this URL in your browser (replace with your actual script URL):
```
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

If it shows "This app isn't verified" or redirects, the script is active.

## Setup Instructions (If Not Already Done)

### Step 1: Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet (replace with your sheet ID)
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    
    // Get form data
    const data = e.parameter;
    
    // Prepare row data
    const row = [
      data.SubmissionDate || new Date().toLocaleString(),
      data.FormType || '',
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || '',
    ];
    
    // Append row to sheet
    sheet.appendRow(row);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 2: Deploy as Web App
1. Click "Deploy" > "New deployment"
2. Select type: "Web app"
3. Set:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click "Deploy"
5. Copy the Web App URL

### Step 3: Configure Environment Variable
1. Create a `.env` file in your project root:
```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

2. Replace `YOUR_SCRIPT_ID` with your actual script ID from the deployment URL

3. Restart your dev server:
```bash
npm run dev
```

## Troubleshooting

### Issue: Forms submit but no data appears in sheet
- **Check**: Is the Apps Script deployed correctly?
- **Check**: Does the script have permission to access the sheet?
- **Check**: Is the sheet ID correct in the script?

### Issue: CORS errors in console
- **Solution**: This is normal with `no-cors` mode. The request still goes through.

### Issue: "This app isn't verified" warning
- **Solution**: This is normal for personal use. Click "Advanced" > "Go to [Your App] (unsafe)"

### Issue: Forms always show success even when failing
- **Solution**: This is a limitation of `no-cors` mode. Check your Google Sheet to verify submissions.

## Current Configuration

- **Service File**: `services/googleSheetService.ts`
- **Used In**:
  - Enrollment Modal (`components/EnrollmentModal.tsx`)
  - Contact Page (`pages/ContactPage.tsx`)
  - Home Page - Mentor Form (`pages/HomePage.tsx`)

## Next Steps

1. **Test a form submission** and check your Google Sheet
2. **Create `.env` file** if you want to use environment variables
3. **Update the hardcoded URL** in `googleSheetService.ts` if needed
4. **Monitor your Google Sheet** to verify submissions are being received

