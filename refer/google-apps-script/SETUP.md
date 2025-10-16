# Google Sheets Integration Setup Guide

This guide will help you set up the Google Sheets integration for the Navam contact form.

## Architecture Overview

```
User submits form on navam.io/contact
         ↓
ContactForm.vue (Vue component with client-side validation)
         ↓
POST request to Google Apps Script Web App
         ↓
Google Apps Script processes request
         ↓
Data saved to Google Sheets + Email notification sent
```

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it: `Navam Contact Form Leads`
4. Copy the **Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
                                          ^^^^^^^^^^^^^^^^^
   ```
5. Save this ID - you'll need it in Step 2

## Step 2: Deploy Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click **+ New project**
3. Name the project: `Navam Contact Form API`
4. Delete the default `myFunction()` code
5. Copy the entire contents of `Code.gs` from this directory
6. Paste it into the script editor
7. **IMPORTANT**: Update these configuration values in the script:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // From Step 1
   ```
   ```javascript
   const recipient = 'YOUR_EMAIL@gmail.com'; // Your notification email
   ```

## Step 3: Test the Setup

1. In the Apps Script editor, select the `testSetup` function from the dropdown
2. Click **Run** (▶️ icon)
3. When prompted, click **Review permissions**
4. Select your Google account
5. Click **Advanced** → **Go to Navam Contact Form API (unsafe)**
6. Click **Allow**
7. Check the **Execution log** (View → Execution log)
8. You should see: `✅ Setup complete!`
9. Open your Google Sheet - you should see a test entry

## Step 4: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Fill in the deployment settings:
   - **Description**: `Production v1`
   - **Execute as**: `Me (your@email.com)`
   - **Who has access**: `Anyone`
5. Click **Deploy**
6. Click **Authorize access** and complete the authorization flow
7. **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/XXXXX/exec
   ```

## Step 5: Update ContactForm.vue

1. Open `src/components/ContactForm.vue`
2. Find this line (around line 221):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
   ```
3. Replace with your Web App URL from Step 4:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/XXXXX/exec'
   ```
4. Save the file
5. Commit and push to deploy

## Step 6: Test the Live Form

1. Go to `https://navam.io/contact`
2. Fill out the form with test data
3. Submit the form
4. Check your Google Sheet - you should see a new row
5. Check your email - you should receive a notification

## Google Sheet Structure

The script automatically creates a sheet named "Leads" with these columns:

| Column | Description |
|--------|-------------|
| **Timestamp** | When the form was submitted (formatted) |
| **Name** | Contact's full name |
| **Email** | Contact's email address |
| **Company** | Company name (optional) |
| **Interest** | Selected product/service |
| **Message** | Contact's message |
| **Source** | Always "navam.io/contact" |
| **Status** | "New" (you can update manually) |
| **Notes** | Empty - for your follow-up notes |

## Email Notifications

You'll receive an email notification for each new submission with:
- All form data in a nicely formatted HTML email
- Quick action links to reply or view the sheet
- Color-coded interest badges

## Security Features

✅ **No API keys in client code**: The Google Apps Script runs server-side with your credentials
✅ **CORS handling**: Script accepts requests from any origin (required for static sites)
✅ **Input validation**: Client-side and server-side validation
✅ **Error handling**: Graceful error messages for users

## Troubleshooting

### Form submission shows "Sending..." but never completes

**Solution**: The Web App URL might be incorrect or the deployment isn't set to "Anyone".

1. Verify the URL in `ContactForm.vue` matches your deployment URL
2. Redeploy the script with "Who has access" set to "Anyone"

### No data appears in Google Sheet

**Solution**: Check the Apps Script execution logs.

1. Go to your Apps Script project
2. Click **Executions** (left sidebar)
3. Check for errors in recent executions
4. Verify the `SPREADSHEET_ID` is correct

### Email notifications not received

**Solution**: Check the email configuration in `Code.gs`.

1. Verify the `recipient` email address is correct
2. Check your spam folder
3. The script uses `GmailApp.sendEmail()` which should work automatically

### "Permission denied" errors

**Solution**: Re-authorize the script.

1. Go to Apps Script project
2. Run `testSetup` function again
3. Complete the authorization flow
4. Redeploy the Web App

## Updating the Script

If you need to make changes to the Google Apps Script:

1. Edit `Code.gs` in the Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the pencil icon (✏️) next to the current deployment
4. Change **Version** to "New version"
5. Click **Deploy**

**Note**: The Web App URL stays the same, so you don't need to update `ContactForm.vue`.

## Data Privacy

- Leads are stored only in your Google Sheet (under your Google account)
- No third-party services have access to the data
- Google Apps Script runs with your permissions
- You have full control over data retention and deletion

## Next Steps

After setup is complete:

1. **Test thoroughly**: Submit several test forms to verify everything works
2. **Set up a process**: Decide how you'll follow up with leads (status updates, notes, etc.)
3. **Monitor regularly**: Check the sheet periodically for new leads
4. **Optional**: Set up Google Sheets notifications or integrate with your CRM

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review Apps Script execution logs for errors
3. Verify all configuration values are correct
4. Test with the `testSetup()` function

## Advanced Configuration

### Customize Email Template

Edit the `sendEmailNotification()` function in `Code.gs` to customize the email HTML template.

### Add Slack Notifications

Add this function to send Slack notifications (requires Slack webhook URL):

```javascript
function sendSlackNotification(data) {
  const webhookUrl = 'YOUR_SLACK_WEBHOOK_URL';
  const payload = {
    text: `🎯 New lead: ${data.name} interested in ${data.interest}`,
    attachments: [{
      color: '#0891b2',
      fields: [
        { title: 'Name', value: data.name, short: true },
        { title: 'Email', value: data.email, short: true },
        { title: 'Company', value: data.company || 'N/A', short: true },
        { title: 'Interest', value: data.interest, short: true },
        { title: 'Message', value: data.message }
      ]
    }]
  };

  UrlFetchApp.fetch(webhookUrl, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  });
}
```

Then call it from `doPost()`:
```javascript
sendSlackNotification(data);
```

### Add Auto-Response Email

Add this function to send an auto-response to the submitter:

```javascript
function sendAutoResponse(email, name) {
  const subject = 'Thanks for contacting Navam!';
  const body = `Hi ${name},\n\nThank you for reaching out to Navam. We've received your message and will get back to you within 24 hours.\n\nBest regards,\nThe Navam Team`;

  GmailApp.sendEmail(email, subject, body);
}
```

Then call it from `doPost()`:
```javascript
sendAutoResponse(data.email, data.name);
```
