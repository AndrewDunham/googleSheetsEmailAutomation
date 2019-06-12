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
          cost = "\n\nERROR please contact pool.greenwoodcity@gmail.com for more information.\n\n";
       }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      
        var emailed = theSheet.getRange(number, 17).getValue(); 
        
        var parentName = theSheet.getRange(number, 2).getValue();
        var childName = theSheet.getRange(number, 5).getValue();
        var session = theSheet.getRange(number, 10).getValue();
      
        var messageLine1 = '\n\nThank you for registering ' + childName + ' for RCSK ' + class + ' in ' + session + ' at the Greenwood Municipal Swimming Pool.'; 
        var messageLine2 = '\nThe outstanding balance for this registration is ' + cost;
        var messageLine3 = '\nIf you have registered any other children or for any other sessions you can expect emails confirming those registrations.';
        var messageLine4 = '\n\nPlease ensure you pay your outstanding fees at least a week prior to your program start date, unpaid accounts risk losing their placement to those on the Wait List. ';
        var finalLine = '\n';
        //Message original or HTML
        //var message = messageLine1 + messageLine2 + messageLine3 + messageLine4.italics() +  finalLine;
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MESSAGE FORMATTED BELOW THIS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        var message =  
            '<body>' + 
              '<img src="https://midwaybc.ca/wp-content/uploads/2017/12/Greenwood-pool-logo-300x126.jpg"><br><br>' + 
              'Thank you for registering ' + childName + ' for RCSK '  + class + ' in ' + session + ' at the Greenwood Municipal Swimming Pool. <br/>' +
                '<p></p>' +
                'The outstanding balance for this registration is: ' + cost + ' ' +
                '<p> If you have registered any other children or for any other sessions you can expect emails confirming those registrations shortly. </p>' +
                '<i> <h5>Please ensure you pay your outstanding fees at least a week prior to your program start date, unpaid accounts risk losing their placement to those on the Wait List.</h5> </i>' +
                '<b>Options for payment:</b>' +
                '<h5>        Ensure you bring a copy of this email (either physical or digital) to the City Hall if you choose this option.</h5> <ul>'+
                '<li>   Debit at City Hall in Greenwood (regular hours Monday to Friday 8:30 to 4:30, closed from 12:00 to 1:00)</li>' +
                '<li>   Cash or cheque to the Greenwood Municipal Swimming Pool  </li>'
            '</ul></body>'
        Logger.log(message);
      
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        var emailRange = theSheet.getRange(number, 14).getValue();
        Logger.log(emailRange);
        var subject = 'Testing Email Confirmations V5';
      MailApp.sendEmail(emailRange, subject, message, {htmlBody: message}); //Send the email (WORKING)
        
        theSheet.getRange(number,17).setValue('Yes'); //Set the emailed bool
        number +=1; //go to the next row (WORKING)
    }
    var deleted = (number - 1);
    theSheet.getRange(deleted,17).setValue('');//Delete the accidentally inserted Yes
}
