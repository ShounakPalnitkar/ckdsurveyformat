function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Responses');
    
    // Append data to sheet
    sheet.appendRow([
      new Date(),
      data.easeOfUse,
      // Add other data fields
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({status: 'success', message: 'Data saved successfully'})
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({status: 'error', message: error.toString()})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
