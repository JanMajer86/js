const sumNumbers = (...numbers) => numbers.reduce((acc, cur) => acc + cur);
console.log(sumNumbers(5, 10, 15, 20));

const mergeArrays = (arr, arr2) => [...arr, ...arr2];
console.log(mergeArrays(["hello", "wrld"], [1, 2, 3]));

const multiplyByFactor = (factor, ...values) =>
	values.map((value) => value * factor);
console.log(multiplyByFactor(5, 4, 5, 6, 7));

const filterOddNumbers = (...arr) => {
	console.log(arr);
	const newArr = arr.filter((num) => num % 2 === 0);
	return newArr;
};
const inputNumbers = [1, 2, 3, 4, 5, 6];
console.log(filterOddNumbers(...inputNumbers));

const operateOnElements = (...args) => args.map((el) => el * 2);
console.log(operateOnElements(1, 3, 7));

function multiplyAll(...nums) {
	return nums.reduce((acc, cur) => (acc *= cur), 1);
}
console.log(multiplyAll(2, 3, 4));
console.log(multiplyAll(1, 5, 10, 2));

function mergeObjects(obj, ...rest) {
	return Object.assign(obj, ...rest);
}
console.log(mergeObjects({ name: "John" }, { age: 30 }, { country: "USA" }));
