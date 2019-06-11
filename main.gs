function sendEmails(){
    var number = 3;//Row start, this will increment.
    var theSheet = SpreadsheetApp.getActiveSheet();//Get the current spreadsheet.
    var nullCell = theSheet.getRange("C2").getValue();//A cell which will have nothing in it.

    var emailed = theSheet.getRange(number, 17).getValue(); //Starting cell with an email address in it.
    var yes = theSheet.getRange("A2").getValue();//A cell with the value of yes.
    var cost = "$0";
    
    while (emailed != nullCell){
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GET CLASS COST~~~~~~~~~~~~~~~~~~~~~~~~~
       var class = theSheet.getRange(number, 9).getValue();
      
       if(class == "Starfish" || class == "Duck" || class == "Sea Turtle" || class == "Sea Otter" || class == "Salamander" || class == "Sunfish" || class == "Crocodile" || class == "Whale"){
          cost = "$35";
       } else if (class == "Level 1" || class == "Level 2" || class == "Level 3" || class == "Level 4"){
          cost = "$50";
       } else if (class == "Level 5" || class == "Level 6" || class == "Level 7" || class == "Level 8" || class == "Level 9" || class == "Level 10"){
          cost = "$55";
       } else{
          cost = "ERROR please contact pool.greenwoodcity@gmail.com for more information.";
       }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      
        var emailed = theSheet.getRange(number, 17).getValue(); 
        
        var parentName = theSheet.getRange(number, 2).getValue();
        var childName = theSheet.getRange(number, 5).getValue();
        var session = theSheet.getRange(number, 10).getValue();
      
        var messageLine1 = '\n\nThank you for registering ' + childName + ' for RCSK ' + class + ' in ' + session + ' at the Greenwood Municipal Swimming Pool.'; 
        var messageLine2 = '\nThe outstanding balance for this registration is ' + cost;
        var finalLine = '\n'
        var message = messageLine1 + messageLine2 + finalLine;
        Logger.log(message);
        //var emailRange = theSheet.getRange(number, 14).getValue();
      
        //var subject = 'Testing Email Confirmations V3'; //Subject of the email (WORKING)
        //MailApp.sendEmail(emailRange, subject, message); //Send the email (WORKING)
        
        theSheet.getRange(number,17).setValue('Yes'); //Set the emailed bool
        number +=1; //go to the next row (WORKING)
    }
    var deleted = (number - 1);
    theSheet.getRange(deleted,17).setValue('');//Delete the accidentally inserted Yes
}
