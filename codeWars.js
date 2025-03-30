// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:

// apples, pears
// grapes
// bananas

const string = " t-EwhjoK!Y Tax*g/^w";
const index = string.indexOf("-");
console.log(index);

function solution(text, markers) {
	const rows = text.split("\n");
	rows.forEach((row, i) => {
		const indexArr = [];
		for (const marker of markers) {
			if (row.indexOf(marker) >= 0) indexArr.push(row.indexOf(marker));
		}
		const minIndex = Math.min(...indexArr);
		rows[i] = row.slice(0, minIndex).trimEnd();
	});
	return rows.join("\n");
}

let result4 = solution("$t*\niu\n t-EwhjoK!Y Tax*g/^w\nKOYqkhRe", [
	"^",
	"-",
	"$",
	"\\",
]);
// console.log(result);
// console.log(result2);
// console.log(result3);
console.log(result4);
// "\niu\n t\nKOYqkhRe"
// result should == "apples, pears\ngrapes\nbananas"
