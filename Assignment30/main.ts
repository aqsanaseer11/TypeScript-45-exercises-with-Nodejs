//Q no.30:Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// //creating variable.
let userNames =["Sikandar","Rizwan","Dawood","Admin","Ibrahim"]

//using foreach loop on array.

userNames.forEach(oneUser=>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report? `);
        
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
        
    }
})
