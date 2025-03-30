// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first matchMedia, if no match - undefined

const people = [
	{ name: "bob", age: 20, position: "developer" },
	{ name: "peter", age: 25, position: "designer" },
	{ name: "sussy", age: 30, position: "the boss" },
	{ name: "anna", age: 35, position: "intern" },
];
const fruits = ["orange", "pear", "lemon"];
// FILTER
const youngPeople = people.filter((person) => {
	// if (person.age < 26) return person;
	return person.age < 26;
});
// const youngPeople = people.filter((person) => person.age < 26);

const developers = people.filter((person) => person.position === "developer");
console.log(developers);
// NO MATCH
const seniorDevs = people.filter((item) => item.position === "senior dev");
console.log(seniorDevs);

// FIND
const peter = people.find((person) => person.name === "peter");
console.log(peter);
const fruit = fruits.find((fruit) => fruit === "lemon");
console.log(fruit);
// NO MATCH
const oldPerson = people.find((person) => person.age > 40);
console.log(oldPerson);
// MULTIPLE MATCHES - FIRST MATCH
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

const anna = people.filter((person) => person.name === "anna");
console.log(peter.position);
console.log(anna[0].position);
