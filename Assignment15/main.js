"use strict";
// //Q15.Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// //so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// //Guests list..
// // let guests:string[]=["Asma","Amna","zunehra","Eshal","zeemal","Fatima"];
// //Guest can't come..
// // let unableToAttend = "Fatima"
// //  console.log(`${unableToAttend} Can't make it to dinner`);
// //add new guest..
// // let newGuest = "Zainab"
// //  guests[guests.indexOf(unableToAttend)]=newGuest
// //print invite all guests..
// // guests.forEach(guest=>{
// //     console.log(` Dear ${guest}... ${"\n"} "You're invited to a cozy dinner affair at 'Clock Tower'"`)
// // });
// // Q16. More Guests: You just found a bigger dinner table, so now more space is available. 
// //Think of three more guests to invite to dinner. you can add more guests to your list.
// // You can add guests at the beginning, middle, and end of an array.
// //Guests list..
// // let guests:string[]=["Asma","Amna","zunehra","Eshal","zeemal","Zainab"];
// // console.log("Great news! I found a bigger dinner table.");
// //add new guests in start, middle and end..
// // guests.unshift("Diba");
// // guests.splice(3,0,"Nadia");
// // guests.push("Abira")
// //print a inintation for all guests..
// // guests.forEach(guest=>{
// //     console.log(`Dear ${guest}... ${"\n"} "You're invited to a cozy dinner affair at 'Clock Tower'..:D`);
// //})
// //Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// // and you have space for only two guests.  Remove guests from your list one at a time until only two names remain in your list.
// //print message for informing that i can invite only two people for dinner.
// // let guests:string[]=["Diba","Asma","Amna","Nadia","zunehra","Eshal","zeemal","Zainab","Abira"];
// // console.log("Sadly, I can only invite two people to a meal");
// //print message ethet i can't invite them.
// // while(guests.length>2){
// //     let removedGuest = guests.pop();
// //     console.log(`Sorry, ${removedGuest} I can't invited you to a meal`);    
// // }
// //print invitation..
// // guests.forEach(guest => {
// //     console.log(`Dear ${guest} ... ${"\n"} "would u like to enjoy a meal with me".`);
// // })
// //Q18.Seeing the World: Think of at least five places in the world you’d like to visit.
// //store the location in array.
// let countriesToVisit:string[] = ["Dubai","Algeria","Belgium","China","France","Egypt"]
// //print array in its original order.
// console.log("Original order:",countriesToVisit);
// //print array in alphabetical order without modifying the actual list.
// console.log("Alphabetical order:", [...countriesToVisit].sort());
// //print array still in its original order..
// console.log("Still in original order",countriesToVisit);
// //print alphabetical order in reverse without changing its original list.
// console.log("Reverse alphabetical order:",[...countriesToVisit].reverse());
// //print array still in its original order..
// console.log("Still in original order:",countriesToVisit);
// //reverse the order of your list..
// countriesToVisit.reverse()
// //print the array to show that its order has changed
// console.log(countriesToVisit);
// //Reverse the order of countries list again..
// countriesToVisit.reverse()
// //print the array to show that its order has changed.
// console.log(countriesToVisit);
// //sort array for stored in alphabetical order.
// countriesToVisit.sort()
// //print it to show that its order has been changed.
// console.log(countriesToVisit);
// //sort to change your array so its stored to reverse alphabetical order.
// countriesToVisit.reverse();
// //print it again to show that its order has been changed.
// console.log(countriesToVisit);
// //Q19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// //print a message indicating the number of people you are inviting to dinner.
//copy array from ex17.
// let guests:string[]=["Diba","Asma","Amna","Nadia","zunehra","Eshal","zeemal","Zainab","Abira"];
// //number of invited people.
// let guestLength:number=guests.length;
// //print a message indicating the number of people.
// console.log(`I'm inviting total "${guestLength}" guests..`);
//Q.20: Think of something you could store in a array. For example,
// you could make a list of mountains, rivers, countries, cities, languages,
// or anything else you’d like. Write a program that creates a list containing these items.
//making array :
// let pakHeroes:string[]=["Muhammad Ali Jinnah","Allama Muhammad Iqbal","Liaquat Ali Khan ","Abdul Qadeer Khan"
// ]
// //print a message
// console.log("List of national heroes:");
// //print the value of array in the form of list
// pakHeroes.forEach(pakHero => console.log(pakHero));
//Q21.They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.
// interface itCourse {
//     courseName : string;
//     location : string;
//     onsiteStudents:number;
// }
// let itCourse = {
//     courseName : "TypeScript and JavaScript",
//     location : "Governor House, Karachi",
//     onsiteStudents: 50000
// };
// console.log(itCourse);
//Q22.Intentional Error: If you haven’t received an array index error in one of your programs yet, 
//try to make one happen.Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
//make array
//let pakHeroes:string[]=["Muhammad Ali Jinnah","Allama Muhammad Iqbal","Liaquat Ali Khan ","Abdul Qadeer Khan"]
// //producing index error
// console.log(pakHeroes[5]);
//error removed
// console.log(pakHeroes[3]);
//Q23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
//for the results of each test. Your code should look something like this:
// let num = 10
// //Test no.1
// console.log("Is num == '10'? I predict true.");
// console.log(num==10);
// //Test no.2
// console.log("\n Is num == '9'? I predict false.");
// console.log(num==9);
// //Test no.3
// console.log("\n Is num === '10'? I predict true. ");
// console.log(num === 10);
// //Test no.4
//  console.log("\n Is num =! '10'? I predict false.");
//  console.log(num != 10);
// //Test no.5
// console.log("\n Is num < '7'? I predict true.");
// console.log(num>7);
// //Test no.6
// console.log("\n Is num > '7'? I predict false.");
// console.log(num<7);
// //Test no.7
// console.log("\n Is num <= '11' ? I predict true.");
// console.log(num<=11);
// //Test no.8
// console.log("\n Is num <= '4'? I predict false.");
// console.log(num<=4)
// //Test no.9
// console.log("\n Is num >= '5'? I predict true.");
// console.log(num>=5);
// //Test no.10
// console.log("\n Is num >= '15'? I predict false.");
// console.log(num>=15);
//Q no.24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons,write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings.
// console.log("Testing equality with strings:");
// console.log("apple" == "apple");
// console.log("apple" == "Apple"); 
// //Tests using the lower case function
// console.log("Testing with lower case:");
// console.log("Apple".toLowerCase()=="apple");
// console.log("apple".toLocaleLowerCase()=="Apple");
// //Numerical tests involving equality and inequality, 
// //greater than and less than, greater than or equal to, and less than or equal to
// console.log("Numerical Testing equality with operators");
// console.log(10 > 8);
// console.log(10<8);
// console.log(10<=12);
// console.log(10>=12);
// //Tests using "and" and "or" operators.
// console.log("Testing && and || operators.")
// console.log(true&&false);
// console.log(true||false);
// //Test whether an item is in a array.
// let fruits =["Apple","Banana","Grappes"]
// console.log("is 'Apple' in fruits?");
// console.log(fruits.includes("Apple"));
// //Test whether an item is not in a array.
// console.log("is 'Cherry' in fruits");
// console.log(fruits.includes("Cherry"));
//Q no.25:Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// let alien_color = "Green";
// if(alien_color==="Green"){
//     console.log("Player just earned 5 point..");
// }
// if(alien_color==="Yellow"){
//     console.log("Player just earned 0 point..");
// }
//q no.26:Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// let alien_color = "Green";
// if(alien_color==="Green"){
//     console.log("Player just earned 5 points for shooting the alien..");    
// }else{
//     console.log("Player just earned 10 points..");
//q no.27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// //version1
// let alien_color ="Green";
// if(alien_color==="Green"){
//     console.log("Player just earned 5 point..");
// }else if (alien_color==="Yellow") {
//     console.log("Player just earned 10 point..");
// } else if(alien_color==="Red") {
//     console.log("Player just earned 15 point..");
// }
// //version2
// let alien_color2="Yellow";
// if(alien_color2==="Green"){
//     console.log("Player just earned 5 point..");
// }else if (alien_color2==="Yellow") {
//     console.log("Player just earned 10 point..");
// } else if(alien_color2==="Red") {
//     console.log("Player just earned 15 point..");
// }
// //version3
// let alien_color3="Red";
// if(alien_color3==="Green"){
//     console.log("Player just earned 5 point..");
// }else if (alien_color3==="Yellow") {
//     console.log("Player just earned 10 point..");
// } else if(alien_color3==="Red") {
//     console.log("Player just earned 15 point..");
// }
//q no.28:Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//creating variable.
// let age = 22;
// // If the person is less than 2 years old, print a message that the person is a baby.
// //If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// //If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// // If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// // If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// // If the person is age 65 or older, print a message that the person is an elder.
// if (age < 2){
//     console.log("The person is baby...");
// }else if (age >=2 && age<4){
//     console.log("The person is a toddler...");
// }else if (age >= 4 && age < 13){
//     console.log("The person is kid...");
// }else if (age >= 13 && age < 20){
//     console.log("The person is a teenager...");
// }else if (age >= 20 && age < 65){
//     console.log("The person is an adult...");
// }else if (age >= 65){
//     console.log("The person is an elder...");
// }
//Q no.29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//Make a array of your three favorite fruits and call it favorite_fruits.
// let favorite_fruits = ["Kiwi","Lichi","Grapes"]
// // Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// if(favorite_fruits.includes("Kiwi")){
//     console.log("I really like Kiwi..");
// }
// if(favorite_fruits.includes("Lichi")){
//     console.log("I really like Lichi..");
// }
// if(favorite_fruits.includes("Mango")){
//     console.log("I like Mango..");
// }
// if(favorite_fruits.includes("Grapes")){
//     console.log("I really like Grapes..");  
// }
// if(favorite_fruits.includes("Guava")){
//     console.log("I don't like Guava..");
// }
//Q no.30:Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// //creating variable.
// let userNames =["Sikandar","Rizwan","Dawood","Admin","Ibrahim"]
// //using foreach loop on array.
// userNames.forEach(oneUser=>{
//     if(oneUser === "Admin"){
//         console.log(`Hello ${oneUser}, would you like to see a status report? `);
//     }else{
//         console.log(`Hello ${oneUser}, thank you for logging in again.`);
//     }
// })
//Q no.31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// let userNames =["Sikandar","Rizwan","Dawood","Admin","Ibrahim"]
// userNames=[]
// if(userNames.length === 0){
//     console.log("We need to find some users!");
// }else{
//     userNames.forEach(oneUser=>{
//             if(oneUser === "Admin"){
//                 console.log(`Hello ${oneUser}, would you like to see a status report? `);
//             }else{
//                 console.log(`Hello ${oneUser}, thank you for logging in again.`);
//             }
//         })
// }
//Q no.32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.
// let current_users = ["Anna","Eshaal","Ashir","shaheer","Salim"]
// // Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// let new_users = ["Maya","Ibrahim","Ayan","Anna","Shaheer"]
// //Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username.
// // If a username has not been used, print a message saying that the username is available.
// new_users.forEach(newUser=>{
//    let ourcondition=current_users.some(currentUser=>currentUser.toLowerCase()===newUser.toLowerCase())
//     if(ourcondition){
//         console.log(`Sorry this username ${newUser} is already taken You will need to enter a new user name..`);
//     }else{
//         console.log(`This username ${newUser} is available`);
//     }
// })
//Q no.33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//Store the numbers 1 through 9 in a array.
// let ordinal_Numbers = [1,2,3,4,5,6,7,8,9]
// //Loop through the array.
// for(let ordinal_One_Number of ordinal_Numbers){
//     let ordinalEnd:string;
////Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
//     if(ordinal_One_Number === 1){
//         ordinalEnd = "st"
//     }else if (ordinal_One_Number === 2){
//         ordinalEnd = "nd"
//     }else if (ordinal_One_Number===3){
//         ordinalEnd = "rd"
//     }else {
//         ordinalEnd = "th"
//     }
//     console.log(`${ordinal_One_Number}${ordinalEnd}`);
// }
// //Q no.34:Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// let favPizzas =["Arabic hot","BBQ","Super Creamy"]
// //using for loop
// for(let onePizza of favPizzas ){
//     console.log(`I like ${onePizza} pizza 😍`);
// }
// //print the message outside from the loop
// console.log("Pizza is love 🍕");
// //Q no.35: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// //creatting a lis same characterstic animals name.
// let petAnimal = ["Cat","Dog","Goat"]
// //Using for loop.
// for(let one_pet of petAnimal){
//     console.log(`A ${one_pet} would make a great pet..❤️`);
// }
// //print a message outside of the loop
// console.log("Any of these animals would make a great pet..");
// //Q no.36:T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// // The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt (size:string , printMessage:string){
//     console.log(`You selected "${size}" size shirt with "${printMessage}" print on shirt...`);
// }
// make_shirt("small","You can't afford me")
// //Q no.37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// //making a function..
//  function make_shirt (size:string = "Large" , printMessage:string = "I love TypeScript"){
//                            console.log(`Creating a "${size}" shirt with the "${printMessage}" print on shirt`);
//  }
//  //calling a function by default value
//  make_shirt()
//  //calling a function now with medium size by default
//  make_shirt("Medium")
//  //calling a function now with small size and also print different massage.
//  make_shirt("small","I love JavaScript")
// // Q no.38:Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
// // Call your function for three different cities, at least one of which is not in the default country
// //creating a function
// function describe_city (city:string , country:string="Pakistan"){
//     console.log(`"${city}" is in "${country}"`);
// }
// //calling a function with by default value
// describe_city("Karachi")
// describe_city("Lahore")
// describe_city("New York","USA")
// //Q no.39:City Names: Write a function called city_country() that takes in the name of a city and its country.
// //Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_country (city:string,country:string):string{
//     return `${city},${country}`
// }
// console.log(city_country("Karachi","Pakistan"));
// console.log(city_country("New York","USA"))
// console.log(city_country("Madina","Saudi Arabia"))
// //Q no.40:Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object 
// //containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album 
// //information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// // If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// function make_album(artist_name:string, album_title:string, tracks?:number){
//     let album:{artist:string,title:string,tracks?:number}={
//         artist:artist_name,
//         title:album_title
//     };
//     if(tracks !== undefined){
//         album.tracks=tracks;
//     }
//     return album
// };
// let album1 = make_album("Arijit singh","ohh mahi",2)
// let album2 = make_album("Atif Aslam","tere liye")
// let album3 = make_album("RFAK","Dil lagi")
//  console.log(album1);
// console.log(album2);
// console.log(album3);
////Qno.41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// function show_magicians (magicians : string []){
//     magicians.forEach(name=>console.log(name)
//     )
// }
// let magician_name = ["David Blaine","Teller","Criss Angle"]
// show_magicians(magician_name)
////Qno.42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
// function show_magicians (magicians : string []){
//         magicians.forEach(name=>console.log(name)
//         )
//     }
//     function make_great(magicians:string[]){
//        return magicians.map(name=>`The Great ${name}`)
//     }
//     let magician_name = ["David Blaine","Teller","Criss Angle"]
//    let magician = make_great(magician_name)
//    show_magicians(magician)
// //Qno.43:Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. 
// //Because the original array will be unchanged, return the new array and store it in a separate array. 
// //Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// function show_magicians (magicians : string []){
//     magicians.forEach(name=>console.log(name)
//     )
// }
// function make_great(magicians:string[]){
//    return magicians.map(name=>`The Great ${name}`)
// }
// let magician_name = ["David Blaine","Teller","Criss Angle"]
// //makin a copy of original array.
// let copy_magician_names = magician_name.slice()
// //modify the copied array
// let copy_great_magician =make_great(copy_magician_names)
// console.log("original array \n");
// show_magicians(magician_name)
// console.log("\ncopied array \n");
// show_magicians(copy_great_magician)
// //Qno.44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, 
// //and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// function makeSandwich (...items:string[]){
//     console.log("Making a sandwich with the following items");
//     items.forEach(singleItem=>console.log(singleItem)
//     )
//     console.log("\n Now enjoye your sandwich\n");
// }
// makeSandwich("chicken","cheese","egg","mayo")
// makeSandwich("bread","butter")
// makeSandwich("bread","butter","mayo","katchup","egg","tommato")
//Qno.45:Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
