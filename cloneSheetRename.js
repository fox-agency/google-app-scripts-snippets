function cloneGoogleSheet() {
  
  var sheetName = 'Form Responses 1';
  var newName = Date.now().toString();
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName).copyTo(ss);
    
  sheet.setName(newName);

  /* Make the new sheet active */
  ss.setActiveSheet(sheet);

}
