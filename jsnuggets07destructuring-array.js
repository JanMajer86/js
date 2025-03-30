// faster/easier way to access/upnack variables from arrays, objects
const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];

const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

// const [enemy, peter, bob, anna, kelly, susan] = friends;
// console.log(enemy, peter, bob, anna, kelly, susan);

const [enemy, , bob, , kelly] = friends;
console.log(enemy, bob, kelly);

let first = "bob";
let second = "john";

// let temp = second;
// second = first;
// first = temp;

[second, first] = [first, second];

console.log(first, second);
