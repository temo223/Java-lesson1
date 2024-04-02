let myName = "temo"; // String
let myHobby = "reading"; // String
let yearOfBirth = 1998; // Number
let currentYear = 2024; // Number

// asakis gamotvla
let age = currentYear - yearOfBirth;


let sentenceConcat = "My name is " + myName + ", I am " + age + " years old and my hobby is " + myHobby + ".";

let sentenceTemplate = `My name is ${myName}, I am ${age} years old and my hobby is ${myHobby}.`;

console.log("concatenation:", sentenceConcat);
console.log("literals:", sentenceTemplate);
