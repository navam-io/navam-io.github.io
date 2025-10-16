# Troubleshooting Guide - Contact Form Not Working

## Issue: Form submits but no data in Google Sheets

### Step 1: Check Google Apps Script Execution Logs

1. Go to [Google Apps Script](https://script.google.com)
2. Open your "Navam Contact Form API" project
3. Click **Executions** in the left sidebar
4. Look for recent executions (they should appear when you submit the form)

**What to look for:**

- ✅ **Executions appear**: Script is receiving requests
- ❌ **No executions**: Script isn't receiving requests (deployment issue)
- ⚠️ **Errors shown**: Click the execution to see error details

### Step 2: Check the Logs for Errors

1. In the **Executions** page, click on a failed execution
2. Look for error messages in the logs
3. Common errors and solutions:

#### Error: "Cannot find spreadsheet"
```
Error: Cannot find spreadsheet with ID: XXXXX
```
**Solution**: The `SPREADSHEET_ID` in your script is incorrect.
1. Open your Google Sheet
2. Copy the ID from the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit`
3. Update `SPREADSHEET_ID` in Code.gs
4. Redeploy the script (Deploy → Manage deployments → Edit → New version → Deploy)

#### Error: "Permission denied"
```
Exception: You do not have permission to call SpreadsheetApp.openById
```
**Solution**: The script doesn't have proper permissions.
1. In Apps Script editor, run the `testSetup` function
2. Click **Review permissions**
3. Select your Google account
4. Click **Advanced** → **Go to Navam Contact Form API**
5. Click **Allow**
6. Try submitting the form again

#### Error: "JSON.parse error"
```
SyntaxError: Unexpected token in JSON
```
**Solution**: The request payload is malformed.
1. Check the browser console for errors when submitting the form
2. Verify the form data is being sent correctly
3. Check the Console logs in the Apps Script execution to see the raw payload

### Step 3: Verify Web App Deployment

1. Go to **Deploy** → **Manage deployments**
2. Verify the deployment settings:
   - **Type**: Web app
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** ⚠️ This is critical!

If "Who has access" is not set to "Anyone", the script will reject requests from your website.

**To fix:**
1. Click the pencil icon (✏️) next to your deployment
2. Change "Who has access" to **Anyone**
3. Click **Deploy**

### Step 4: Test the Script Directly

1. In the Apps Script editor, select the `testSetup` function from the dropdown
2. Click **Run** (▶️)
3. Check the execution log for success/error messages

If `testSetup()` works but the live form doesn't:
- The script is working
- The issue is likely with the deployment or CORS

### Step 5: Check the Deployment URL

1. Verify the URL in ContactForm.vue matches your deployment URL exactly
2. The URL should look like:
   ```
   https://script.google.com/macros/s/XXXXX.../exec
   ```
3. Make sure it ends with `/exec` (not `/dev`)

### Step 6: Test with Browser Developer Tools

1. Open your website: `https://navam.io/contact`
2. Open Browser DevTools (F12 or Right-click → Inspect)
3. Go to the **Network** tab
4. Fill out and submit the form
5. Look for a request to `script.google.com`

**What to check:**

- **Request appears**: Form is sending the request ✅
- **Status 200**: Request succeeded ✅
- **Status 403/404**: Deployment issue or wrong URL ❌
- **Status 405**: Method not allowed (check deployment settings) ❌
- **CORS error**: This is normal with Google Apps Script - the form should still work

### Step 7: Enable Detailed Logging

The updated `Code.gs` now includes detailed console logging. After redeploying:

1. Submit a test form
2. Check the Executions page
3. Click on the execution
4. You should see logs like:
   ```
   Received POST request
   Payload: {"name":"John Doe",...}
   Parsed data: [Object object]
   Opened spreadsheet: Navam Contact Form Leads
   Adding new row to sheet
   Row added successfully. Row number: 5
   Sending email notification
   ✅ Request processed successfully
   ```

If you see `❌ Error processing form submission`, the error message will tell you exactly what went wrong.

### Step 8: Verify Google Sheet Permissions

1. Open your Google Sheet
2. Click **Share** in the top right
3. Verify that the Google account running the script has edit access
4. If using a different account, make sure both accounts have access

### Step 9: Check Form Validation

Sometimes the form doesn't submit because of validation errors:

1. Open Browser Console (F12 → Console tab)
2. Fill out the form
3. Look for JavaScript errors when clicking Submit
4. All required fields must be filled:
   - Name (min 2 characters)
   - Email (valid format)
   - Interest (must select an option)
   - Message (min 10 characters)

### Step 10: Manual Test Request

Test the script endpoint directly using `curl`:

```bash
curl -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Co",
    "interest": "Navam Invest",
    "message": "This is a test message from curl",
    "timestamp": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'",
    "source": "Manual curl test"
  }'
```

If this works (creates a row in the sheet), the script is fine and the issue is with the website form.

## Common Issues and Solutions

### Issue: Form shows "Message sent successfully!" but no data in sheet

**Cause**: Using `mode: 'no-cors'` in fetch request means JavaScript can't read the response, so it assumes success even if it failed.

**Solution**: Check the Google Apps Script execution logs (Step 1) to see if the request actually reached the script.

### Issue: SPREADSHEET_ID is correct but still getting "Cannot find spreadsheet"

**Cause**: The Google account running the script doesn't have access to the sheet.

**Solution**:
1. Make sure you're logged into the same Google account in both:
   - Google Apps Script (script owner)
   - Google Sheets (sheet owner)
2. Or share the sheet with the script owner account

### Issue: Email notifications not received

**Possible causes:**
1. Recipient email is incorrect in Code.gs
2. Email went to spam folder
3. Gmail quota limit reached (100 emails/day for free accounts)

**Solution:**
1. Check spam/junk folder
2. Verify recipient email in `sendEmailNotification()` function
3. Check Gmail sending quota

### Issue: Form works in dev but not in production

**Cause**: Different Web App URL between deployments

**Solution:**
1. Make sure you're using the "Web app" URL from **Manage deployments**
2. Not the script editor URL
3. URL should end with `/exec`

## Need More Help?

If none of these solutions work:

1. **Check the exact error message** in Apps Script Executions
2. **Look at the Console logs** - they now include detailed debugging info
3. **Copy the error** and search for it online
4. **Verify all configuration**:
   - SPREADSHEET_ID is correct
   - Email recipient is correct
   - Deployment is set to "Anyone"
   - Web App URL in ContactForm.vue is correct

## Quick Verification Checklist

Before going live, verify:

- [ ] `testSetup()` function runs successfully
- [ ] Web App is deployed with "Who has access: Anyone"
- [ ] SPREADSHEET_ID matches your Google Sheet
- [ ] GOOGLE_SCRIPT_URL in ContactForm.vue matches deployment URL
- [ ] Email notifications are being received (check spam)
- [ ] Test form submission creates a row in the sheet
- [ ] Browser console shows no JavaScript errors
- [ ] Network tab shows request to script.google.com

Once all items are checked, the integration should work perfectly!
