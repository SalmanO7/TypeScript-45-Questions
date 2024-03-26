// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList = ["Elon Musk", "Hanry Cavil", "Tom Cruise"];
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
// Print the person who can't make it
let guestRemove = "Tom Cruise"; // Corrected spelling
console.log(`Sorry dear ${guestRemove}, you can't join.`);
// Replace the guest who can't make it
let newGuest = "Pedro Alonso";
let guestReplace = guestList.indexOf(guestRemove);
if (guestReplace !== -1) {
    guestList[guestReplace] = newGuest;
}
console.log(guestList);
// • Print a second set of invitation messages, one for each person who is still in your list.
guestList.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));
export {};
