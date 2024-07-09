let MyName = "Wind";
const MyNumber = 10;
let Phone = 12345678;
Phone = 87654321;

let arr = [1, 2, 3, 4, 5];
let isHuman = true;

console.log(MyName);
console.log(MyNumber);
console.log(Phone);
console.log(arr);
console.log(isHuman);


// Calculations
let a = (5 + 7) * 2;
let b = (5 - 7) / 3;
let c = 5 ** 7; // power
let d = 123 % 45; // mod div
let e = Math.random();
let f = Math.round(123.1232342);
let g = Math.cos(Math.PI);
let h = Math.E ** 2;

console.log(a, b, c, d, e, f, g, h);

// str
let firstName = "Andrew";
let lastName = "Tay";
let fullName = firstName + " " + lastName;
let nameLength  = fullName.length;
console.log(fullName, nameLength)

let language = "JavaScript";
console.log(language[0]);
console.log(language.substring(2,5))
console.log(language.toUpperCase());
console.log(language.replace("Java", "Type"))
console.log(language.includes("Java"))

// use string literals
console.log(`Imagine not knowing this is ${language.includes("Java")}`)

