/**********************************
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
Create an iterable object from the Object
**********************************/

let westeros = {
	cersei: "Lannister",
	arya: "Stark",
	jon: "Snow",
	brienne: "Tarth",
	daenerys: "Targaryen",
	theon: "Greyjoy",
	jorah: "Mormont",
	margaery: "Tyrell",
	sandor: "Clegane",
	samwell: "Tarly",
	ramsay: "Bolton",
};

for (item of Object.entries(westeros)) {
	console.log(item);
}
