// Q15.Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Guests list..
 let guests:string[]=["Asma","Amna","zunehra","Eshal","zeemal","Fatima"];
// Guest can't come..
 let unableToAttend = "Fatima"
  console.log(`${unableToAttend} Can't make it to dinner`);
// add new guest..
 let newGuest = "Zainab"
  guests[guests.indexOf(unableToAttend)]=newGuest
// print invite all guests..
 guests.forEach(guest=>{
   console.log(` Dear ${guest}... ${"\n"} "You're invited to a cozy dinner affair at 'Clock Tower'"`)
});


