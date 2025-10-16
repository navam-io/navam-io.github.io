/**
 * Navam Contact Form - Google Apps Script
 *
 * This script receives form submissions from navam.io/contact and stores them in Google Sheets.
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Create a new Google Sheet:
 *    - Go to https://sheets.google.com
 *    - Create a new spreadsheet named "Navam Contact Form Leads"
 *    - Copy the spreadsheet ID from the URL (it's the long string between /d/ and /edit)
 *    - Replace SPREADSHEET_ID below with your spreadsheet ID
 *
 * 2. Deploy this script as a Web App:
 *    - Go to https://script.google.com
 *    - Create a new project
 *    - Paste this entire code
 *    - Click Deploy > New deployment
 *    - Select type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy
 *    - Copy the Web App URL
 *    - Replace GOOGLE_SCRIPT_URL in ContactForm.vue with this URL
 *
 * 3. Test the integration:
 *    - Submit a test form on your website
 *    - Check your Google Sheet for the new row
 */

// CONFIGURATION: Replace with your Google Sheet ID
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';

/**
 * Handle POST requests from the contact form
 */
function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request');
    console.log('Request type:', e.postData ? e.postData.type : 'No postData');

    // Parse the data - handle both JSON and form-encoded
    let data;
    if (e.postData && e.postData.type === 'application/json') {
      console.log('Parsing JSON payload');
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      console.log('Using form parameters');
      data = e.parameter;
    } else {
      throw new Error('No data received in request');
    }

    console.log('Parsed data:', data);

    // Get the spreadsheet
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log('Opened spreadsheet:', ss.getName());

    let sheet = ss.getSheetByName('Leads');

    // Create the sheet if it doesn't exist
    if (!sheet) {
      console.log('Creating new Leads sheet');
      sheet = ss.insertSheet('Leads');
      // Add headers
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Company',
        'Interest',
        'Message',
        'Source',
        'Status',
        'Notes'
      ]);

      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4A5568');
      headerRange.setFontColor('#FFFFFF');

      // Freeze header row
      sheet.setFrozenRows(1);

      // Set column widths
      sheet.setColumnWidth(1, 180); // Timestamp
      sheet.setColumnWidth(2, 150); // Name
      sheet.setColumnWidth(3, 200); // Email
      sheet.setColumnWidth(4, 150); // Company
      sheet.setColumnWidth(5, 180); // Interest
      sheet.setColumnWidth(6, 300); // Message
      sheet.setColumnWidth(7, 120); // Source
      sheet.setColumnWidth(8, 100); // Status
      sheet.setColumnWidth(9, 200); // Notes
    }

    // Format timestamp
    const timestamp = new Date(data.timestamp);
    const formattedTimestamp = Utilities.formatDate(
      timestamp,
      Session.getScriptTimeZone(),
      'yyyy-MM-dd HH:mm:ss'
    );

    // Add the new lead
    console.log('Adding new row to sheet');
    sheet.appendRow([
      formattedTimestamp,
      data.name || '',
      data.email || '',
      data.company || 'N/A',
      data.interest || '',
      data.message || '',
      data.source || 'Unknown',
      'New',  // Status
      ''      // Notes (for manual follow-up notes)
    ]);
    console.log('Row added successfully. Row number:', sheet.getLastRow());

    // Send email notification (optional)
    console.log('Sending email notification');
    sendEmailNotification(data);

    // Return success response with CORS headers
    const output = ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'row': sheet.getLastRow(),
        'timestamp': new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);

    console.log('✅ Request processed successfully');
    return output;

  } catch (error) {
    // Log error with details
    console.error('❌ Error processing form submission:', error);
    console.error('Error stack:', error.stack);

    // Return error response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString(),
        'timestamp': new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput('Navam Contact Form API is running. Use POST to submit form data.')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Send email notification for new leads (optional)
 * Update the email address to your Navam Google account email
 */
function sendEmailNotification(data) {
  try {
    const recipient = 'YOUR_EMAIL@gmail.com'; // Replace with your email
    const subject = `🎯 New Contact Form Submission: ${data.interest}`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); padding: 30px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">New Lead from navam.io</h1>
        </div>

        <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #1f2937; margin-top: 0;">Contact Information</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">
                <a href="mailto:${data.email}" style="color: #0891b2; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Company:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${data.company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Interest:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">
                <span style="background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-weight: 500;">
                  ${data.interest}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${data.message}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Submitted:</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${new Date(data.timestamp).toLocaleString()}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 20px; background: #ecfeff; border-left: 4px solid #06b6d4; border-radius: 4px;">
            <p style="margin: 0; color: #0e7490;">
              <strong>Quick Actions:</strong><br>
              • Reply to ${data.email}<br>
              • View all leads in <a href="https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}" style="color: #0891b2;">Google Sheets</a>
            </p>
          </div>
        </div>

        <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
          <p>This is an automated notification from Navam Contact Form</p>
        </div>
      </div>
    `;

    GmailApp.sendEmail(recipient, subject, '', {
      htmlBody: htmlBody,
      name: 'Navam Contact Form'
    });

  } catch (error) {
    console.error('Error sending email notification:', error);
    // Don't throw - we don't want email failures to block form submissions
  }
}

/**
 * Test function to verify setup
 * Run this function from the script editor to test your configuration
 */
function testSetup() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company',
    interest: 'Navam Invest',
    message: 'This is a test message to verify the Google Apps Script integration.',
    timestamp: new Date().toISOString(),
    source: 'Manual Test'
  };

  try {
    // Test sheet access
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log('✅ Successfully connected to spreadsheet:', ss.getName());

    // Test adding a row
    const e = {
      postData: {
        contents: JSON.stringify(testData)
      }
    };
    const result = doPost(e);
    console.log('✅ Test submission successful:', result.getContent());

    console.log('🎉 Setup complete! Check your Google Sheet for the test entry.');

  } catch (error) {
    console.error('❌ Setup test failed:', error);
    console.error('Please check:');
    console.error('1. SPREADSHEET_ID is correct');
    console.error('2. You have edit access to the spreadsheet');
    console.error('3. The script has necessary permissions');
  }
}
