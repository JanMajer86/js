console.log("EXERCISE 1");

let item = ["Egg", 0.25, 12];

// let name = item[0];
// let price = item[1];
// let quantity = item[2];

// const [name, price, quantity] = item;

// console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
console.log();

console.log("EXERCISE 2");

let numbers = [3, 5, 4, 2, 6, 1];

// let [one, two, three, four, five, six] = numbers;

const [three, five, four, two, six, one] = numbers;

console.log(
	`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`
);

console.log("EXERCISE 3");

let user = { name: "John", years: 30, isAdmin: true };

// your code to the left side:
// let { name, years: age, isAdmin = false } = user;

// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false
// console.log();

console.log("EXERCISE 4");

// let person = [12, "Chris", "Owen"];

// let firstName = person[1];
// let lastName = person[2];
// let age = person[0];

// const [age, firstName, lastName] = person;

// console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);

console.log("EXERCISE 5");

let person = ["Chris", 12, "Owen"];

// const [firstName, , lastName] = person;
// let firstName = person[0];
// let lastName = person[2];

// console.log(`Name: ${firstName} ${lastName}`);

console.log("EXERCISE 6");

const students = ["Christina", "Jon", "Alexandare"];

// Write your code here
const [, , lastName] = students;

console.log(lastName);

console.log("EXERCISE 7");

const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

const [student1, [student2, student3], [student4, student5]] = moreStudents;

// Write your code here
const [] = moreStudents;
console.log(student1, student2, student3, student4, student5);
