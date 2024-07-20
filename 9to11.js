    
    //User Input & Conditional Statement chapter 9to11
    //1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
       
          var cityName = prompt("Q1) Please Enter Your City!")
          if (cityName === "Karachi") {
          alert("Welcome to city of lights");
          }

    //2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.     
         
          var gender = prompt("Q2) Please Enter Your Gender")
          if(gender === "Male"){
            alert("Good Morning Sir!")
          }
          else{
            alert("Good Morning Ma'am!")
            }

    //3. Write a program to take input color of road traffic signal from the user & show the message according to this table:        
    
    // Step 1: Prompt user for input
         var color = prompt("Q3) Enter the color of the traffic signal (red, yellow, green):").toLowerCase();

   // Step 2: Use conditional statements to display message based on color
         if (color === "red") {
       alert("Signal color is Red\n\nMust Stop!");
        } else if (color === "yellow") {
       alert("Signal color is Yellow\n\nReady to move!");
        } else if (color === "green") {
       alert("Signal color is Green\n\nMove now!");
        } else {
    alert("Invalid color entered. Please enter either red, yellow, or green.");
        }
    //4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

        var fuel = prompt("Q4) Please enter the remaining fuel in your car (in litres):");
        if(fuel < 0.25){
            alert("Please refill the fuel in your car")
        }

    //5. Run this script, & check whether alert message would be displayed or not. Record the outputs.    
    
    // Part (a)
    var a = 4;
    if (++a === 5){
        alert("Q5) Part (a) Given condition for variable a is true");
    }
    
    // Part (b)
    var b = 82;
    if (b++ === 83){
    alert("Part (b) Given condition for variable b is false");
    }

    // Part (c)
    var c = 12;
    if (c++ === 13){
    alert("Q5) Part (c) condition 1 is false");
    }
    if (c === 13){
    alert("Q5) Part (c) Condition 2 is true");
    }
    if (++c < 14){
    alert("Part (c) condition 3 is false");
    }
    if(c === 14){
    alert("Q5) Part (c) Condition 4 is true");
    }

    // Part (d)
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("Q5) Part (d) The cost equals");
    }
    
    // Part (f)
    if ("car" < "cat"){
      alert("Q5) Part (f) car is smaller than cat");
  }

  // 6. Write a program to take input the marks obtained in three subjects & total marks. 
  //Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
  
  // Step a) Prompt user for three subject name
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

// Step b) Total marks for each subject is 100
var eachMarks = 100;
var totalMarks = 300;


// Step c) Prompt user for obtained marks for each subject
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3));

// Step d) Calculate total obtained marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / totalMarks) * 100;

if (percentage >= 80) {
  grade = 'A-one';
  remarks = 'Excellent';
} else if (percentage >= 70) {
  grade = 'A';
  remarks = 'Very Good';
} else if (percentage >= 60) {
  grade = 'B';
  remarks = 'You need to improve';
} else if (percentage < 60 ) {
  grade = 'F';
  remarks = 'Fail';
}

// Step e) Display result in browser

document.write("<br><br>")

document.write("<blockquote><h1>Q6) Mark Sheet:</h1><br><br>");

document.write("<h2>Total Marks: " + totalMarks + "<br><br>");

document.write("Obtained Marks: " + totalObtainedMarks + "<br><br>");

document.write("Percentage: " + percentage.toFixed(2) + "%<br><br>");

document.write("Grade: " + grade + "<br><br>");

document.write("Remarks: " + remarks + "</h2></blockquote>");

// 7. Guess game:
//Store a secret number (ranging from 1 to 10) in a variable.
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number
var userGuess = parseInt(prompt("Q7) Guess the secret number (between 1 and 10): "), 10);

//a. If user guesses the same number, show “Bingo! Correct answer”.
//b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert(`Sorry, that's not correct. The secret number was: ${secretNumber}`);
}

//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// Prompt the user to enter a number
var userNumber = parseInt(prompt("Q8) Enter a number to check if it is divisible by 3: "), 10);

// Check if the number is divisible by 3
if (userNumber % 3 === 0) {
    alert(`${userNumber} is divisible by 3.`);
} else {
    alert(`${userNumber} is not divisible by 3.`);
}

//9. Write a program that checks whether the given input is an even number or an odd number.

// Prompt the user to enter a number
var userNumber = parseInt(prompt("Q9) Enter a number to check if it is even or odd: "), 10);

// Check if the number is even or odd
if (userNumber % 2 === 0) {
    alert(`${userNumber} is an even number.`);
} else {
    alert(`${userNumber} is an odd number.`);
}

//10. Write a program that takes temperature as input and shows a message based on following criteria 
//a. T > 40 then “It is too hot outside.” 
//b. T > 30 then “The Weather today is Normal.” 
//c. T > 20 then “Today”s Weather is cool.” 
//d. T > 10 then “OMG! Today’s weather is so Cool.”

// Prompt the user to enter the temperature
var temperature = parseFloat(prompt("Q10) Enter the temperature: "));

// Show a message based on the temperature
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is very cold outside.");
}

//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.

// Prompt the user to enter the first number
var firstNumber = parseFloat(prompt("Q11-Part a)  Enter the first number: "));

// Prompt the user to enter the second number
var secondNumber = parseFloat(prompt("Q11-Part b) Enter the second number: "));

// Prompt the user to enter the operation (+, -, *, /, %)
var operation = prompt("Q11-Part c) Enter the operation (+, -, *, /, %): ");

// Initialize a variable to store the result
var result;

// Perform the calculation based on the operation
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    result = "Invalid operation!";
}

// Show the calculated result to the user
alert(`The result is: ${result}`);