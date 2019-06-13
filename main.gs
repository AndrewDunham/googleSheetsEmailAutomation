function runEmails(){
  sendEmails(3);
}


function sendEmails(numberStart){
    var number = numberStart;//Row start, this will increment.
    var theSheet = SpreadsheetApp.getActiveSheet();//Get the current spreadsheet.
    var nullCell = theSheet.getRange("C2").getValue();//A cell which will have nothing in it.

    var emailed = theSheet.getRange(number, 16).getValue(); //Starting cell with an email address in it.
    var yes = theSheet.getRange("A2").getValue();//A cell with the value of yes.
    var cost = "$0";
    
      if(emailed == yes){
        number = number + 1;
        sendEmails(number);
        
      }
      else if(emailed == nullCell){
        return;
      }
      else{
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GET CLASS COST~~~~~~~~~~~~~~~~~~~~~~~~~
       var class = theSheet.getRange(number, 9).getValue();
       var paid = theSheet.getRange(number, 12).getValue();
        if(paid == 'Yes'){
          cost = '$0';
        }else{
          if(class == "Starfish" || class == "Duck" || class == "Sea Turtle" || class == "Sea Otter" || class == "Salamander" || class == "Sunfish" || class == "Crocodile" || class == "Whale"){
            cost = "$35";
          } else if (class == "Level 1" || class == "Level 2" || class == "Level 3" || class == "Level 4"){
            cost = "$50";
          } else if (class == "Level 5" || class == "Level 6" || class == "Level 7" || class == "Level 8" || class == "Level 9" || class == "Level 10"){
            cost = "$55";
          } else{
            cost = "\n\nERROR please contact pool.greenwoodcity@gmail.com for more information.\n\n";
          }
        }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      
        var emailed = theSheet.getRange(number, 16).getValue(); 
        
        var parentName = theSheet.getRange(number, 2).getValue();
        var childName = theSheet.getRange(number, 5).getValue();
        var session = theSheet.getRange(number, 10).getValue();
      
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
                '<h5>        Ensure you bring a copy of this email (either physical or digital) to the City Hall if you choose to pay at city hall.</h5> <ul>'+
                '<li>   Debit at City Hall in Greenwood (regular hours Monday to Friday 8:30 to 4:30, closed from 12:00 to 1:00)</li>' +
                '<li>   Cash or cheque to the Greenwood Municipal Swimming Pool  </li>'
            '</ul></body>'
        Logger.log(parentName);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        var emailRange = theSheet.getRange(number, 14).getValue();
        Logger.log(emailRange);
        var subject = 'Greenwood Municipal Pool: Booking Confirmation';
        MailApp.sendEmail(emailRange, subject, message, {htmlBody: message}); //Send the email (WORKING)
        
        theSheet.getRange(number,16).setValue('Yes'); //Set the emailed bool
        number = number + 1; //go to the next row (WORKING)
        sendEmails(number);
      }
}
