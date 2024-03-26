//42.  Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians = ["Salman", "Faizan", "Asif"];
function ShowMagicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
ShowMagicians(magicians);
function makeGreatMagicians(magicians) {
    magicians.map(magician => console.log(`The Great ${magician}`));
}
makeGreatMagicians(magicians);
export {};
