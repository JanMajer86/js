// Spread Operator...
// Allows an iterable to spread/expand individually inside receiver
// Split into single items and COPY them
const udemy = "udemy";

const letters = [...udemy];
console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

// reference
// const newFriends = friends;

// copy
const newFriends = [...friends];
newFriends[0] = "nancy";
console.log(friends);
console.log(newFriends);

// ES2018 - ES8 Objects
const person = { name: "john", job: "developer" };
// const newPerson = person;
// const newPerson = { ...person };
const newPerson = { ...person, name: "peter", age: 39 };
// newPerson.name = "peter";
console.log(person);
console.log(newPerson);
