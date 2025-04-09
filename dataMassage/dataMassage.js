const names = [
	{
		name: "Emmet",
		gender: "Male",
		createdBy: "Kristýna",
	},
	{
		name: "Jaime",
		gender: "Male",
		createdBy: "Kristýna",
	},
	{
		name: "Mikol",
		gender: "Male",
		createdBy: "Kristýna",
	},
	{
		name: "Craig",
		gender: "Male",
		createdBy: "Honza",
	},
	{
		name: "Janos",
		gender: "Male",
		createdBy: "Kristýna",
	},
	{
		name: "Noelyn",
		gender: "Female",
		createdBy: "Kristýna",
	},
	{
		name: "Wandis",
		gender: "Female",
		createdBy: "Honza",
	},
	{
		name: "Waly",
		gender: "Female",
		createdBy: "Kristýna",
	},
	{
		name: "Barbette",
		gender: "Female",
		createdBy: "Honza",
	},
	{
		name: "Kyrstin",
		gender: "Female",
		createdBy: "Honza",
	},
];

const groupKeys = ["letter", "gender", "user"];
const filterKeys = ["none", "gender", "user"];

const groupFn = (data, keyGetter) => {
	return data.reduce((result, item) => {
		const key = keyGetter(item);
		if (!result[key]) {
			result[key] = [];
		}
		result[key].push(item);
		return result;
	}, {});
};

const filterFn = (data, filterBy) => {
	console.log(data);
	console.log(data.names);
	if (filterBy === "none") return;
	const filtered = data.filter((group) => {
		console.log(group);
	});
};

const groupedNames = () => {
	let keyGetter;
	const groupBy = groupKeys[2];
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

	const groupedObj = groupFn(names, keyGetter);
	const groupedIterable = Object.entries(groupedObj);
	// console.log(groupedIterable);
	const groupedWithKeys = groupedIterable.map((group) => {
		// console.log(group);
		const [key, names] = group;
		// console.log(key);
		// console.log(names);
		return { key, names };
	});
	// console.log(groupedWithKeys)
	return groupedWithKeys;
};

const filteredNames = () => {
	const filterBy = filterKeys[0];
	console.log(filterBy);
	return filterFn(data, filterBy);
};

const data = groupedNames();
filteredNames();
console.log(data);
