//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames: string[] = []

if (userNames.length > 0) {
    for (let i = 0; i < userNames.length; i++) {
        const username = userNames[i]
        if (username === "admin") {
            console.log(`Hello ${username}, would you like to see a status report`);

        } else {
            console.log(`Hello ${username}, thank you for loggin in again. `)
        }
    }
} else{
    console.log("We need to find some users!")
}
