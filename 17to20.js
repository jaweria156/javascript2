// Chapter 17 to 20 Arrays and Loop

// 1. Declare and initialize an empty multidimensional array.(Array of arrays)
var multidimentionArray = [];

// 2. Declare and initialize a multidimensional array representing the following matrix:
var matrix = [
    [0, 1, 2, 3]
    [1, 0, 1, 2]
    [2, 1, 0, 1]
];

// 3. Write a program to print numeric counting from 1 to 10.
var Numbers = "<blockquote><h3>Q3) Counting from 1 to 10:<br>"
document.write(Numbers)
for (var i = 1; i <= 10; i++, "</h3></blockquote>") {
    document.write( i + "<br>");
  }

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// Take table number and length as inputs from the user
var tableNumber = parseInt(prompt("Q4) Enter the table number: "));
var length = parseInt(prompt("Q4) Enter the length of the table: "));

// Print the multiplication table
var table = "<br><br><h3>Q4) Multiplication Table of " + tableNumber + " " +  "length" +  " " + length + "<br><br>"
document.write(table)
for (var i = 1; i <= length; i++) {
  document.write("<br>" + tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// Initialize the array
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var index = "<br><br>Element at index 0 is Apple" 
var index1 = "<br>Element at index 1 is Banana" 
var index2 = "<br>Element at index 2 is Mango" 
var index3 = "<br>Element at index 3 is Orange" 
var index4 = "<br>Element at index 4 is Strawberry" 


// Print the items of the array using a for loop
var heading = "<br><br>Q5) Fruits Name <br>"
document.write(heading)
for (let i = 0; i < fruits.length; i++) {
  document.write("<br>" + fruits[i])
}
document.write(index + index1 + index2 + index3 + index4)

//6. Generate the following series in your browser. See example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

  // Counting
  let counting = "";
  for (let i = 1; i <= 15; i++) {
    counting += i + (i < 15 ? ", " : "");
  }
  document.write("<br><br>Q6) Counting: " + counting + "<br>");

  // Reverse Counting
  let reverseCounting = "";
  for (let i = 10; i >= 1; i--) {
    reverseCounting += i + (i > 1 ? ", " : "");
  }
  document.write("Reverse Counting: " + reverseCounting + "<br>");

  // Even numbers
   evenNumbers = "";
  for (var i = 0; i <= 20; i += 2) {
    evenNumbers += i + (i < 20 ? ", " : "");
  }
  document.write("Even: " + evenNumbers + "<br>");

  // Odd numbers
  let oddNumbers = "";
  for (let i = 1; i < 20; i += 2) {
    oddNumbers += i + (i < 19 ? ", " : "");
  }
  document.write("Odd: " + oddNumbers + "<br>");

  // Series
  let series = "";
  for (let i = 2; i <= 20; i += 2) {
    series += i + "k" + (i < 20 ? ", " : "");
  }
  document.write("Series: " + series + "<br>");

//7. You have an array
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an array.
//After searching, prompt the user whether the given item is found in the list or not. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Q7) Welcome to ABC Bakery.\nWhat do you want to order Sir/ma'am?");

var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        found = true;
        break;
    }
}

if (found) {
    alert("Ans7)" + userInput + " is available in our Bakery.");
} else {
    alert("Ans7) We are sorry." + userInput + " is not available in our Bakery.");
}

//8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
var largest = A[0]; // Assume the first element is the largest

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
var arr = "Q8) Array items:"
document.write("<br><br>", arr + A)
document.write("<br>The largest number is " + largest);

// 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

var B = [24, 53, 78, 91, 12];
var smallest = B[0]; // Assume the first element is the largest

for (var i = 1; i < B.length; i++) {
    if (B[i] < smallest) {
        smallest = B[i];
    }
}
var arr2 = "Q9) Array items:"
document.write("<br><br>", arr2 + B)
document.write("<br>The smallest number is " + smallest);

//10. Write a program to print multiples of 5 ranging 1 to 100.

// Loop through numbers from 1 to 100

var multiple = "<br><br>Q10) Write a program to print multiples of 5 ranging 1 to 100."
 document.write(multiple);
for (var i = 1; i <= 100; i++) {
  // Check if the number is a multiple of 5
  if (i % 5 === 0) {     
      document.write("<br>", i);
  }
}