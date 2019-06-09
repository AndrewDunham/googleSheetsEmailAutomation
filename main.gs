function customEmail() {
  var number = 2;
  var nullCell = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("C1").getValue()
 
  
  //sheet.getRange(5,12).getValue()>sheet.getRange(4,9).getValue())
  //while(emailed != nullCell){
    
    var emailed = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange(4, number).getValue()
    var compareTo = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("E1").getValue()

    if (emailed != compareTo){
      var emailRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange(2,number).getValue();
      var parentName = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("A2").getValue();
      //var childName =  
      var message = 'Hi '+ parentName +'This is the test email.'; 
      var subject = 'Testing Email Confirmations V2';
      MailApp.sendEmail(emailRange, subject, message);
      
      SpreadsheetApp.getActiveSheet().getRange(4,number).setValue('Yes');//Set the emailed bool
      number +=1;//go to the next row
     // customEmail();
    }
    else{
        return;
    }
  //}
}
