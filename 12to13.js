// Chapter: 12 to 13 IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).function checkCharacter(input) {
    // function checkCharacter(input) {
    // if (input.length !== 1) {
    //     return "Input must be a single character.";
    // }

 
var char = 'A'; // Change this value to test different inputs

// Convert the character to its ASCII code
var ascii = char.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log("Q1) The character is a number.");
} else if (ascii >= 65 && ascii <= 90) {
    console.log("Q1) The character is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    console.log("Q1) The character is a lowercase letter.");
} else {
    console.log("Q1) The character is not a number or letter.");
}


// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

    var int1 = parseInt(prompt("Q2) Enter the first integer:"));
    var int2 = parseInt(prompt("Q2) Enter the second integer:"));
    
    if (int1 > int2) {
        console.log("Q2)", "" + int1 + " is larger than " + int2);
    } else if (int2 > int1) {
        console.log("Q2)", "" + int2 + " is larger than " + int1);
    } else {
        console.log("Q2)", "" + int1 + " and " + int2 + " are equal");
    }
// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
   
    var number = prompt("Q3) Enter a Number")

    if (number > 0) {
        console.log("Q3)", "" + number + " is positive.");
    } else if (number < 0) {
        console.log("Q3)", "" + number + " is negative.");
    } else {
        console.log("Q3)", "" + number + " is zero.");
    }


// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// Define the character to check
var alpha = 'a';
// Define an array of vowels
var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

// Check if the character is a vowel and store the result
var isVowel = vowels.includes(alpha);

// Output the result
console.log("Q4)", "" + isVowel); // true


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
    // i. Check if user has entered password. If not, then give message “ Please enter your password”
    // ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.


    // a. Store correct password in a JS variable
var correctPassword = "securePassword123";

// b. Asks user to enter his/her password
var userPassword = prompt("Q5) Enter your password:");

// c. Validate the two passwords
if (userPassword === null || userPassword === "") {
    // i. Check if user has entered password
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    // ii. Check if both passwords are same
    alert("Correct! The password you entered matches the original password.");
} else {
    // If passwords do not match
    alert("Incorrect password.");
}

//6. This if/else statement does not work. Try to fix it:
//var greeting;
//var hour = 13;
//if (hour < 18) {
//greeting = "Good day";
//else
//greeting = "Good evening";
//}

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = ("Q6) Good day");
} else {
    greeting = ("Good evening");
}

console.log(greeting);

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// Assuming the input time is provided as a number
var time = prompt("Q7) Enter time in 24-hour format (e.g., 1900 for 7 PM):");

// Extract hours and minutes from the input
var hours = Math.floor(time / 100);
var minutes = time % 100;
var period = "";

// Validate the input
if (hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60) {
    console.log("Q7) Invalid time format.");
} else {
    if (hours === 0) {
        hours = 12;
        period = "AM";
    } else if (hours > 0 && hours < 12) {
        period = "AM";
    } else if (hours === 12) {
        period = "PM";
    } else if (hours > 12 && hours < 24) {
        hours = hours - 12;
        period = "PM";
    } else {
        console.log("Q7) Invalid time format.");
    }
    
    console.log("Q7) The time is " + hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + period);
}
