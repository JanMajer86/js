const menu = [
	{
		name: "pancakes",
		category: "breakfast",
	},
	{
		name: "burger",
		category: "lunch",
	},
	{
		name: "steak",
		category: "dinner",
	},
	{
		name: "bacon",
		category: "breakfast",
	},
	{
		name: "eggs",
		category: "breakfast",
	},
	{
		name: "pasta",
		category: "dinner",
	},
];

const categories = menu.map((item) => item.category);
// ["breakfast", "lunch", "dinner", "breakfast", "breakfast", "dinner"];
const set = new Set(categories);
// Set(3) { 'breakfast', 'lunch', 'dinner' }
const unique = [...set];
// ["breakfast", "lunch", "dinner"];
const result = ["all", ...unique];
// ["all", "breakfast", "lunch", "dinner"];

// one-liner
const uniqueCategories = ["all", ...new Set(menu.map((item) => item.category))];

console.log(uniqueCategories);
