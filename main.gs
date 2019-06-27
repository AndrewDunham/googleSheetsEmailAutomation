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
          } else if (class == "Adult Lessons" || class == "Swim Club"){
            cost = "$70";
          } else if (class == "Just Fun-Summer Camp" || class == "Junior Lifeguard Camp"){
            cost = "$90";
          } else if(class == "Bronze Cross & Medallion"){
            cost = "$200";
          } else if(class == "National Lifeguard Certification"){
            cost = "$250";
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
        
        if (class == "Just Fun-Summer Camp"){
          var startDate = "July 22nd";
          var endDate = "July 26th";
          var message = 
              '<body>' + 
              '<img src="https://midwaybc.ca/wp-content/uploads/2017/12/Greenwood-pool-logo-300x126.jpg"><br><br>' + 
              '<b>' + childName + '</b> is now registered for <b>' + class + '</b>'  +
                 '<br>The outstanding balance for this registration is: <b>' + cost + '</b>' +
                '<p></p>' +
                'This program will begin on Monday, <b>' + startDate + '</b> and the last day is Friday, <b>' + endDate + '</b>.<br>'+
                'We will meet for 10:00AM at the Greenwood Municipal Swimming Pool for Monday and will advise of meeting location at the end of each day afterwards.<br>' +
                '<br>' +
                'Lunch is included. Please let us know if your child will not be requiring a lunch. <br>' +
                'Please bring a backpack with water, sunblock, a towel, a hat, a zip up hoodie and bathing suite for each day. <br>(As well as any medications, snacks or special items your child might need throughout their day).' +
                '<br><br>Camp ends at 3:30 and we ask that all parents meet us at the Lions Park in Greenwood, unless otherwise advised at morning drop-off.' +
                "<br>Have a safe summer and we'll see you soon!" +
                '-The Greenwood Municipal Swimming Pool<br><br>' +
                
                  
               
                '<p> If you have registered any other children or for any other sessions you can expect emails confirming those registrations shortly. </p>' +  
                '<h4><u>Please ensure you pay your outstanding fees at least a week prior to your program start date, unpaid accounts risk losing their placement to those on the Wait List.</u></h4>' +
                '<b>Options for payment:</b>' +
                '<h5>        Ensure you bring a copy of this email (either physical or digital) to the City Hall if you choose to pay at city hall.</h5> <ul>'+
                '<li>   Debit at City Hall in Greenwood (regular hours Monday to Friday 8:30 to 4:30, closed from 12:00 to 1:00)</li>' +
                '<li>   Cash or cheque to the Greenwood Municipal Swimming Pool  </li>' + 
                '<li>   eTransfer to <b>finance.greenwoodcity@shaw.ca</b> use the password <b>pool2019</b>  </li>' + 
            '</ul>' +
              '<br> If you have any questions or concerns, please reply to this email or call us at <b> 250-445-2211</b>'
            '</body>'
        } else if (class == "Junior Lifeguard Camp"){
          var startDate = "July 29nd";
          var endDate = "August 2nd";
          var message = 
              '<body>' + 
              '<img src="https://midwaybc.ca/wp-content/uploads/2017/12/Greenwood-pool-logo-300x126.jpg"><br><br>' + 
              '<b>' + childName + '</b> is now registered for <b>' + class + '</b>'  +
                 '<br>The outstanding balance for this registration is: <b>' + cost + '</b>' +
                '<p></p>' +
                'This program will begin on Monday, <b>' + startDate + '</b> and the last day is Friday, <b>' + endDate + '</b>.<br>'+
                'We will meet for 10:00AM at the Greenwood Municipal Swimming Pool for Monday and will advise of meeting location at the end of each day afterwards.<br>' +
                '<br>' +
                'Lunch is included. Please let us know if your child will not be requiring a lunch. <br>' +
                'Please bring a backpack with water, sunblock, a towel, a hat, a zip up hoodie and bathing suite for each day. <br>(As well as any medications, snacks or special items your child might need throughout their day).' +
                '<br><br>Camp ends at 3:30 and we ask that all parents meet us at the Lions Park in Greenwood, unless otherwise advised at morning drop-off.' +
                "<br>Have a safe summer and we'll see you soon!" +
                '-The Greenwood Municipal Swimming Pool<br><br>' +
                
                  
               
                '<p> If you have registered any other children or for any other sessions you can expect emails confirming those registrations shortly. </p>' +  
                '<h4><u>Please ensure you pay your outstanding fees at least a week prior to your program start date, unpaid accounts risk losing their placement to those on the Wait List.</u></h4>' +
                '<b>Options for payment:</b>' +
                '<h5>        Ensure you bring a copy of this email (either physical or digital) to the City Hall if you choose to pay at city hall.</h5> <ul>'+
                '<li>   Debit at City Hall in Greenwood (regular hours Monday to Friday 8:30 to 4:30, closed from 12:00 to 1:00)</li>' +
                '<li>   Cash or cheque to the Greenwood Municipal Swimming Pool  </li>' + 
                '<li>   eTransfer to <b>finance.greenwoodcity@shaw.ca</b> use the password <b>pool2019</b>  </li>' + 
            '</ul>' +
              '<br> If you have any questions or concerns, please reply to this email or call us at <b> 250-445-2211</b>'
            '</body>'
        } else if (class == "Bronze Cross & Medallion"){
          var startDate = "August 12th";
          var endDate = "August 16th";
          var message = 
              '<body>' + 
              '<img src="https://midwaybc.ca/wp-content/uploads/2017/12/Greenwood-pool-logo-300x126.jpg"><br><br>' + 
              '<b>' + childName + '</b> is now registered for the <b>' + class + '</b>'  +
                 '<br>The outstanding balance for this registration is: <b>' + cost + '</b>' +
                '<p></p>' +
                'This course will run from  8:30-4:30 Monday through Friday ' + startDate + ' - ' + endDate + '<br><br>' +
                '<br>' +
                'Bring with you each day: <br> A swimsuit and towel, lunch, notebook, pens/pencils, and a good attitude! <br>' +
                
                  
               
                '<h4><u>Please ensure you pay your outstanding fees at least a week prior to your program start date, unpaid accounts risk losing their placement to those on the Wait List.</u></h4>' +
                '<b>Options for payment:</b>' +
                '<h5>        Ensure you bring a copy of this email (either physical or digital) to the City Hall if you choose to pay at city hall.</h5> <ul>'+
                '<li>   Debit at City Hall in Greenwood (regular hours Monday to Friday 8:30 to 4:30, closed from 12:00 to 1:00)</li>' +
                '<li>   Cash or cheque to the Greenwood Municipal Swimming Pool  </li>' + 
                '<li>   eTransfer to <b>finance.greenwoodcity@shaw.ca</b> use the password <b>pool2019</b>  </li>' + 
            '</ul>' +
              '<br> If you have any questions or concerns, please reply to this email or call us at <b> 250-445-2211</b>'
            '</body>'
        }  else if (class == "National Lifeguard Certification"){
          var startDate = "July 8th";
          var endDate = "July 12th";
          var message = 
              '<body>' + 
              '<img src="https://midwaybc.ca/wp-content/uploads/2017/12/Greenwood-pool-logo-300x126.jpg"><br><br>' + 
              '<b>' + childName + '</b> is now registered for the <b>' + class + '</b>'  +
                 '<br>The outstanding balance for this registration is: <b>' + cost + '</b>' +
                '<p></p>' +
                'This course will run from  8:30-4:30 Monday through Friday ' + startDate + ' - ' + endDate + '<br><br>' +
                '<br>' +
                'Bring with you each day: <br> A swimsuit and towel, lunch, notebook, pens/pencils, and a good attitude! <br>' +
                
                  
               
                '<h4><u>Please ensure you pay your outstanding fees at least a week prior to your program start date, unpaid accounts risk losing their placement to those on the Wait List.</u></h4>' +
                '<b>Options for payment:</b>' +
                '<h5>        Ensure you bring a copy of this email (either physical or digital) to the City Hall if you choose to pay at city hall.</h5> <ul>'+
                '<li>   Debit at City Hall in Greenwood (regular hours Monday to Friday 8:30 to 4:30, closed from 12:00 to 1:00)</li>' +
                '<li>   Cash or cheque to the Greenwood Municipal Swimming Pool  </li>' + 
                '<li>   eTransfer to <b>finance.greenwoodcity@shaw.ca</b> use the password <b>pool2019</b>  </li>' + 
            '</ul>' +
              '<br> If you have any questions or concerns, please reply to this email or call us at <b> 250-445-2211</b>'
            '</body>'
        } 
        else{ 
          var message =  
            '<body>' + 
              '<img src="https://midwaybc.ca/wp-content/uploads/2017/12/Greenwood-pool-logo-300x126.jpg"><br><br>' + 
              'Thank you for registering <b>' + childName + '</b> for RCSK <b>'  + class + '</b> in <b>' + session + '</b> at the Greenwood Municipal Swimming Pool. <br/>' +
                '<p></p>' +
                'The outstanding balance for this registration is: <b>' + cost + '</b>' +
                '<p> If you have registered any other children or for any other sessions you can expect emails confirming those registrations shortly. </p>' +
                '<i> <h5>Please ensure you pay your outstanding fees at least a week prior to your program start date, unpaid accounts risk losing their placement to those on the Wait List.</h5> </i>' +
                '<b>Options for payment:</b>' +
                '<h5>        Ensure you bring a copy of this email (either physical or digital) to the City Hall if you choose to pay at city hall.</h5> <ul>'+
                '<li>   Debit at City Hall in Greenwood (regular hours Monday to Friday 8:30 to 4:30, closed from 12:00 to 1:00)</li>' +
                '<li>   Cash or cheque to the Greenwood Municipal Swimming Pool  </li>' + 
                '<li>   eTransfer to <b>finance.greenwoodcity@shaw.ca</b> use the password <b>pool2019</b>  </li>' + 
            '</ul>' +
              '<br> If you have any questions or concerns, please reply to this email or call us at <b> 250-445-2211</b>'
            '</body>'
        }
          
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
