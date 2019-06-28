// This function loops through a Google Sheet doc (The document that is has been added to) and saves out all images contained within, into a zip file.

function ZipImagesFromSheet() {
  
  var folder = DriveApp.getFolderById('root');
  
  var sheetName = 'Form Responses 1';
    
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);;
  var selection = sheet.getDataRange();
  var columns = selection.getNumColumns();
  var rows = selection.getNumRows();
    
  var blobArray = [];
  
  for (var column=1; column < columns + 1; column++) {
    for (var row=1; row < rows + 1; row++) { 
      
      var cell = selection.getCell(row,column);
      var thisVal = cell.getDisplayValue();

      var match = thisVal.match(/https:\/\/drive.google.com\/open\?id=(\w+)/);

      
      if (match) {
      var id = match[1];
        var image = DriveApp.getFileById(id).getBlob();
        blobArray.push(image);
      }
    } 
  }

  if(blobArray.length > 0){
    var zipped = Utilities.zip(blobArray, 'zipped-images.zip')
    folder.createFile(zipped);
  }
    
}
  


