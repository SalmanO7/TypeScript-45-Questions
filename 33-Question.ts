// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbersList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (const nmbr of numbersList) {
    let orignalStr = '';
    if (nmbr == 1) {
        orignalStr = "st"
    } else if (nmbr == 2) {
        orignalStr = "nd"
    } else if (nmbr == 3) {
        orignalStr = "rd"
    } else if (nmbr == 4) {
        orignalStr = "th"
    }
    else {
        orignalStr = "th"
    }

    console.log(`${nmbr}${orignalStr}`)
}
