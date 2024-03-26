//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let str = "hello";
let str2 = "HELLO";
let nmbr = 5;
let nmbr2 = 10;
let arr = [1, 2, 3];
console.log("7 predict that is True");
console.log(str == "hello");
console.log(str !== "HELLO");
console.log(str.toUpperCase() === "HELLO");
console.log(str2.toLowerCase() == "hello");
console.log(nmbr2 > nmbr);
console.log(arr[1] == 2 && nmbr < nmbr2);
console.log(arr[3] !== 3);
console.log(" \n 7 predict that is False \n ");
console.log(nmbr == 10 || nmbr > nmbr2);
console.log(nmbr != 5);
console.log(str2.toLowerCase() !== "hello");
console.log(str2.toLowerCase() === "HELLO");
console.log(arr[2] !== 3);
console.log(arr[0] !== 1 && str.toUpperCase() !== "HELLO");
console.log(nmbr == 100 || nmbr2 != 10);
export {};
