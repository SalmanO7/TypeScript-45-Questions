//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList: string[] = ["Elon", "Musk", "Hanry", "Cavil", "Tom", "Cruise"];
for (const guest of guestList) {
    console.log(`Dear guest ${guest} you are coordially invited to dinner`);
}

console.log("\n Now We can only invite  only 2 guest \n")

while (guestList.length > 2) {
    let guestRemove = guestList.pop();
    console.log(`Sorry, ${guestRemove}, we cant invite you`);
}
console.log(`\n Final Guest list: \n`)
guestList.forEach(guest => console.log(`DEar ${guest}, You are still invited to dinner.`));

