// chapter Math Expressions 6 to 9:

 //1. Write a program to take a number in a variable, do the
    // required arithmetic to display the following result in your
    // // browser:
    let anyNumber = prompt("Q1) Enter any number:");
    document.write("<blockquote><h2>Q1) Result:</h2>");
    document.write("The value of a is:" + anyNumber);
    document.write("<br>..................................<br><br>");
    let preIncrement = ++anyNumber;
    document.write("The value of ++a is:" + preIncrement + "<br>Now the value of a is:" + preIncrement + "<br><br>");
    let postIncrement = preIncrement++;
    document.write("The value of a++ is:" + postIncrement + "<br>");
    postIncrement++;
    document.write("Now the value of a is:" + postIncrement + "<br><br>");
    let preDecrement = --postIncrement;
    document.write("The value of --a is:" + preDecrement + "<br>");
    document.write("Now the value of a is:" + preDecrement + "<br><br>");
    let postDecrement = preDecrement--;
    document.write("The value of a-- is:" + postDecrement + "<br>");
    postDecrement--;
    document.write("Now value of a is:" + postDecrement + "<br>");


 //2. What will be the output in variables a, b & result after
    // execution of the following script:
    // var a = 2, b = 1;
    // var result = --a - --b + ++b + b--;
    // Explain the output at each stage:
    // --a;
    // --a - --b;
    // --a - --b + ++b;
    // --a - --b + ++b + b--;
    var newArray = [];

    // Store values one by one
    newArray[0] = 24;
    newArray[1] = 53;
    newArray[2] = 78;
    newArray[3] = 91;
    newArray[4] = 12;
    
    // Output the array
    console.log(newArray);
    
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    
    var a = 2, b = 1;
    
    --a; // a = 1
    --a - --b; // a = 0, b = 0, result = 0 - 0 = 0
    --a - --b + ++b; // a = 0, b = 1, result = 0 - 0 + 1 = 1
    --a - --b + ++b + b--; // a = 0, b = 1, b becomes 0 after the operation, result = 0 - 0 + 1 + 1 = 2
    
    var result = --a - --b + ++b + b--; // final calculation
    console.log("a:", a); // 0
    console.log("b:", b); // 0
    console.log("result:", result); // 2

// 3. Write a program that takes input a name from user & greet the user.
var userName = prompt("Enter Your UserName");
document.write("<blockquote><h2><br>" + userName + "</h2></blockquote>");


// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var EnterNum = prompt("Enter your number!" , 5)
console.log(EnterNum);

// 6. Take
// Step a) Prompt user for three subject name
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

// Step b) Total marks for each subject is 100
var totalMarks = 100;

// Step c) Prompt user for obtained marks for each subject
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3));

// Step d) Calculate total obtained marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Step e) Display result in browser
document.write("<h2>Result:</h2>");
document.write("<p>Subject 1: " + subject1 + "<br>");
document.write("Obtained Marks: " + obtainedMarks1 + "<br><br>");

document.write("Subject 2: " + subject2 + "<br>");
document.write("Obtained Marks: " + obtainedMarks2 + "<br><br>");

document.write("Subject 3: " + subject3 + "<br>");
document.write("Obtained Marks: " + obtainedMarks3 + "<br><br>");

document.write("Total Marks: " + (3 * totalMarks) + "<br>");
document.write("Total Obtained Marks: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%</p><blockquote>");

