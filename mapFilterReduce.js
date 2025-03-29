// const input = [1, 2, 3, 4, 5];
// const output = input.map((num) => num * num);
// console.log(output);

// const input = [1, -4, 12, 0, -3, 29, -150];
// const output = (input) => {
// 	const sum = input
// 		.filter((num) => num > 0)
// 		.reduce((acc, cur) => {
// 			return acc + cur;
// 		}, 0);
// 	return sum;
// };
// console.log(output(input));

// const input = "George Raymond Richard Martin";
// const output = input
// 	.split(" ")
// 	.map((name) => name.charAt(0))
// 	.join("");
// console.log(output);

// const input1 = [12, 46, 32, 64];
// const input2 = [12, 46, 35, 32, 64];

// const output = (input) => {
// 	return input.reduce(
// 		(acc, cur) => {
// 			acc.mean += cur / input.length;
// 			acc.median =
// 				input.length % 2 === 0
// 					? (input.sort()[input.length / 2] +
// 							input.sort()[input.length / 2 - 1]) /
// 					  2
// 					: input.sort()[Math.floor(input.length / 2)];
// 			return acc;
// 		},
// 		{ mean: 0, median: 0 }
// 	);
// };

// console.log(output(input1));
// console.log(output(input2));

// const input = [
// 	{
// 		name: "John",
// 		age: 13,
// 	},
// 	{
// 		name: "Mark",
// 		age: 56,
// 	},
// 	{
// 		name: "Rachel",
// 		age: 45,
// 	},
// 	{
// 		name: "Nate",
// 		age: 67,
// 	},
// 	{
// 		name: "Jennifer",
// 		age: 65,
// 	},
// ];

// const ageDifference = (arr) => {
// 	const ages = arr.map((person) => person.age);
// 	const min = Math.min(...ages);
// 	const max = Math.max(...ages);
// 	return [min, max, max - min];
// };

// console.log(ageDifference(input));

// const input = "Every developer likes to mix kubernetes and javascript";

// const output = (arr) => {
// 	const words = arr.split(" ");
// 	const result = words.map((word) => {
// 		return word.length < 4
// 			? word
// 			: word.charAt(0) + (word.length - 2) + word.slice(-1);
// 	});
// 	return result.join(" ");
// };

// console.log(output(input));

// const input = 7;

// const output = (num) => {
// 	const result = Array(num)
// 		.fill()
// 		.map((_, i) => i + 1)
// 		.reduce((acc, cur) => (acc *= cur));
// 	return result;
// };

// console.log(output(input));

const input = [
	["a", "b", "c"],
	["c", "d", "f"],
	["d", "f", "g"],
];

const output = (arr) =>
	arr.flat().reduce((acc, cur) => {
		acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
		return acc;
	}, {});
// console.log(output(input));

const students = [
	{ name: "Alice", scores: [90, 85, 92] },
	{ name: "Bob", scores: [75, 80, 85] },
	{ name: "Charlie", scores: [90, 95, 85] },
	{ name: "Jack", scores: [100, 100, 100] },
];

// const avgScoreAbove90 = (students) => {
// 	return students
// 		.map((student) => {
// 			student.average = student.scores.reduce(
// 				(acc, cur, _, arr) => (acc += cur / arr.length),
// 				0
// 			);
// 			delete student.scores;
// 			return student;
// 		})
// 		.filter((student) => student.average > 90);
// };

// console.log(avgScoreAbove90(students));

const products = [
	{ name: "Product 1", price: 20, category: "Electronics" },
	{ name: "Product 2", price: 30, category: "Clothes" },
	{ name: "Product 3", price: 40, category: "Electronics" },
	{ name: "Product 4", price: 50, category: "Clothes" },
	{ name: "Product 5", price: 60, category: "Clothes" },
	{ name: "Product 6", price: 70, category: "Electronics" },
	{ name: "Product 7", price: 80, category: "Clothes" },
	{ name: "Product 8", price: 90, category: "Electronics" },
];

const categories = products.reduce((acc, product) => {
	const category = product.category;
	if (!acc[category]) acc[category] = [];
	acc[category].push(product);
	return acc;
}, {});

// const categoryObj = categories.reduce(
// 	(acc, category) => {
// 		console.log(category);
// 	},
// 	{ category: "", average: 0 }
// );

console.log(categories);
