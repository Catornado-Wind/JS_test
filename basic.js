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

let age = parseInt(prompt("Please enter your age: "));

if (age <= 12){
    console.log("Kid");
}
else if (age <= 18){
    console.log("Teen");
}
else{
    console.log("Adult");
}

fruits = ["apple", "banana", "coconut"];
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (let fruit of fruits){
    console.log(fruits);
}

let counter = 10;
while (counter > 0){
    console.log(counter);
    counter--;
}

let numbers = [123, 12.4, -1];
let schools = ["RI", "TMJC", "ASR", "VJ"];
let mixed = [3, "L", true];

console.log(numbers[0])
console.log(schools.length)

schools.push("HCI")
console.log(schools)
schools.pop()
console.log(schools)

// object (basically dict in Python)
let person = {
    firstName: "Ben",
    lastName: "Bigger",
    age: 26,
    isStudent: false,
};

person["age"] = 27;
console.log(person.age);


// Function
function cube(x){
    return x ** 3;
}

// arrow function
let magnitude = (x, y, z) => Math.sqrt(x**2 + y**2 + z**2);

console.log(magnitude(1, 2, 3))
