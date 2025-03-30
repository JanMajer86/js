// faster/easier way to access/unpack values from objects

const bob = {
	first: "bob",
	last: "sanders",
	city: "chicago",
	siblings: {
		sister: "jane",
	},
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
// console.log(firstName, lastName, sister);
const last = "some value";
const {
	first,
	last: shakeAndBake,
	city,
	zip,
	siblings: { sister: favoriteSibling },
} = bob;
console.log(first, last, city, zip, shakeAndBake, favoriteSibling);

function printPerson(person) {
	// console.log(person.first)
	const {
		first,
		last,
		siblings: { sister },
	} = person;
	console.log(first, last, sister);
}

function printPerson2({ first, last, siblings }) {
	console.log(first, last, siblings);
}

printPerson(bob);
printPerson2(bob);
