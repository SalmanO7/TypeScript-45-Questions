//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList = ["Elon Musk", "Hanry Cavil", "Tom Cruise"];
for (const guest of guestList) {
    console.log(`Dear ${guest}, You Are cordially invited to dinner. `);
}
//Someone Can't make it.
let notInvited = guestList[1];
console.log(`\n ${notInvited} can't make it to the dinner.\n`);
//Replace
guestList[1] = "Alvaro Marte";
for (const guest of guestList) {
    console.log(` Dear ${guest}, You are cordially invited to dinner.`);
}
// found a bigger dinner table
console.log(" \n we found a bigger dinner table! \n ");
// add more guests
// • Add one new guest to the beginning of your array.
guestList.unshift("Pedro Alonso");
// • Add one new guest to the middle of your array.
let guestMiddle = Math.floor(guestList.length / 2);
console.log(guestMiddle);
guestList.splice(2, 0, "Charlie");
// • Use append() to add one new guest to the end of your list.
guestList.push("john cena");
// • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
guestList.forEach(guest => console.log(`Dear ${guest}, You are finally invited to dinner`));
export {};
