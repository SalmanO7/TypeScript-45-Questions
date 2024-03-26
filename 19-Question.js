//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestList = ["Elon ", "Musk", "Hanry ", "Cavil", "Tom ", "Cruise"];
for (const guest of guestList) {
    console.log(`DEar ${guest} you are cordially invited to dinner.`);
}
console.log("\n we can only invite three guests.\n ");
while (guestList.length > 3) {
    let SomeGuest = guestList.pop();
    console.log(`Dear ${SomeGuest} we can't invite you. we have some guests`);
}
console.log(`We have some guest on table ${guestList.length} `);
export {};
