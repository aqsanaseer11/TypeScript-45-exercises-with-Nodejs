"use strict";
//Q no.37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//making a function..
function make_shirt(size = "Large", printMessage = "I love TypeScript") {
    console.log(`Creating a "${size}" shirt with the "${printMessage}" print on shirt`);
}
//calling a function by default value
make_shirt();
//calling a function now with medium size by default
make_shirt("Medium");
//calling a function now with small size and also print different massage.
make_shirt("small", "I love JavaScript");
