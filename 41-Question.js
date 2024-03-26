//41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Salman", "Faizan", "Asif"];
function ShowMagicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
ShowMagicians(magicians);
export {};
