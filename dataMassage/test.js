let value = 1;
if (true) value = 2;
console.log(value);

const arr = [1, 2, 3];
let filtered = arr;
console.log(filtered);
if (true) filtered = arr.filter((num) => num === 1);
console.log(filtered);

const genderValues = ["both", "male", "female"];

const filterKeysValues = {
	gender: "both",
};

filterKeysValues.gender = genderValues[1];

console.log(filterKeysValues);
