const names = [
	{
		name: "Emmet",
		gender: "Male",
		user: "Kristýna",
	},
	{
		name: "Jaime",
		gender: "Male",
		user: "Kristýna",
	},
	{
		name: "Mikol",
		gender: "Male",
		user: "Kristýna",
	},
	{
		name: "Craig",
		gender: "Male",
		user: "Honza",
	},
	{
		name: "Janos",
		gender: "Male",
		user: "Kristýna",
	},
	{
		name: "Noelyn",
		gender: "Female",
		user: "Kristýna",
	},
	{
		name: "Wandis",
		gender: "Female",
		user: "Honza",
	},
	{
		name: "Waly",
		gender: "Female",
		user: "Kristýna",
	},
	{
		name: "Barbette",
		gender: "Female",
		user: "Honza",
	},
	{
		name: "Kyrstin",
		gender: "Female",
		user: "Honza",
	},
];

const groupKeys = ["letter", "gender", "user"];
const filterKeys = ["none", "Male", "Female", "Honza", "Kristýna"];

const massageData = (data, keyGetter, filterKeysValues) => {
	let filtered = data;
	const filterable = Object.entries(filterKeysValues);
	console.log(filterable);
	console.log(filtered);
	filterable.forEach((element) => {
		if (element[1] !== "all") {
			console.log(element[0]);
			filtered = filtered.filter((item) => {
				console.log(item[element[0]] === element[1]);
				return item[element[0]] === element[1];
			});
		} else return;
		// filtered.filter((item) => )
	});
	console.log(filtered);

	return (grouped = filtered.reduce((result, item) => {
		const key = keyGetter(item);
		if (!result[key]) {
			result[key] = [];
		}
		result[key].push(item);
		return result;
	}, {}));
};

const namesModified = () => {
	const groupBy = groupKeys[2];
	const filterKeysValues = {
		gender: "Male",
		user: "Kristýna",
	};

	let keyGetter;
	if (groupBy === "letter")
		keyGetter = function (item) {
			return item.name[0];
		};
	if (groupBy === "gender")
		keyGetter = function (item) {
			return item.gender;
		};
	if (groupBy === "user")
		keyGetter = function (item) {
			return item.createdBy;
		};

	const modifiedObj = massageData(names, keyGetter, filterKeysValues);
	console.log(modifiedObj);

	const modifiedIterable = Object.entries(modifiedObj);
	console.log(modifiedIterable);
	const modifiedWithKeys = modifiedIterable.map((group) => {
		const [key, names] = group;
		console.log(key);
		console.log(names);
		return { key, names };
	});
	console.log(modifiedWithKeys);
	return modifiedIterable;
};

const data = namesModified();
console.log(data);
