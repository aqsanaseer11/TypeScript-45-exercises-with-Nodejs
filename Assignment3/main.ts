// Task no3
let Name: string = "Aqsa";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase())
console.log(Name.replace(/\b\w/g, (abs) => abs.toUpperCase()));
