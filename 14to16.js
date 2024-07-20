// Chapter 14 to 16 Arrays

// 1.Declare an empty array using JS literal notation to store student names in future.
var studentNames = [];

// 2. Declare an empty array using JS object notation to store student names in future.
var studentNames = new Array();

// 3. Declare and initialize a strings array.
var stringArray = ["Ayesha", "Hurma", "Nimra", "Sana"];

// 4. Declare and initialize a numbers array.
var NumArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
var booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array.
var mixedArray = ["Rimsha", 18, true, "Hufsa", 32, false];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan 
     // (e.g. SSC, HSC, BCS, BS, BCOM, MS, M.Phil., PhD).
    // Show the listed qualifications in your browser like:

var heading = "<blockquote><h1>Q7) Qualifications:</h1>"
var Qualification = ["1) SSC<br> 2) HSC<br> 3) BCS<br> 4) BS<br> 5) B.COM<br> 6) MS<br> 7) M.Phil<br> 8) PhD</blockquote>"];
document.write(heading);
document.write("<h3>" + Qualification + "</h3>" );

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// Step1 Write a program to store 3 student names in an array.
var stNames = []
stNames.push("Haniya", "Haya", "Tooba");

// Step2 Take another array to store score of these three students.
var stScore = []
stScore.push(456, 399, 277);

// Step3 Assume that total marks are 500 for each student.
var tt_Marks = 500

// Step4 display the scores & percentages of students.
var percentage1 = (stScore[0]/tt_Marks)*100;
var percentage2 = (stScore[1]/tt_Marks)*100 
var percentage3 = (stScore[2]/tt_Marks)*100 

document.write("<blockquote><h3>Q8) Students Name:" + " " + stNames + "<br>" + "Students Score:" + " " + stScore +"<br>" +  "Students Percentage:" + " " + percentage1.toFixed(1)+ "%"  + percentage2.toFixed(1) + "%" + percentage3.toFixed(1)  + "%" + "</h3><blockquote>")


// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// Initialize the array with color names
var colors = ["Red", "Green", "Blue"];
document.write("<h3> Q9) Initial array: ", colors+ "<br>");

// a. Add a color to the beginning of the array
var colorToAddAtBeginning = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(colorToAddAtBeginning);
document.write("Array after adding color to the beginning: ", colors + "<br>");

// b. Add a color to the end of the array
var colorToAddAtEnd = prompt("Enter a color to add to the end of the array:");
colors.push(colorToAddAtEnd);
document.write("Array after adding color to the end: ", colors + "<br>");

// c. Add two more colors to the beginning of the array
colors.unshift("Yellow", "Purple");
document.write("Array after adding two colors to the beginning: ", colors + "<br>");

// d. Delete the first color in the array
colors.shift();
document.write("Array after deleting the first color: ", colors + "<br>");

// e. Delete the last color in the array
colors.pop();
document.write("Array after deleting the last color: ", colors + "<br>");

// f. Add a color at a specific index
var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
var colorToAddAtIndex = prompt("Enter the color name to add at index " + indexToAdd + ":");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write("Array after adding color at index " + indexToAdd + ": ", colors + "<br>");

// g. Delete color(s) from a specific index
var indexToDelete = parseInt(prompt("Enter the index at which you want to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete from index " + indexToDelete + ":"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("Array after deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ": ", colors) + "<br></h3>";

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// Define an array of student scores
var studentScores = [85, 92, 78, 90, 88, 76, 95, 89, 77, 91];

// Display the original array
document.write("<br> <br> <br>Q10) Scores Of Students:", studentScores);

// Sort the array in ascending order
studentScores.sort((a, b) => a - b);

// Display the sorted array
document.write(" <br>Order Scores Of Students:", studentScores, "<br>")

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// Initialize an array with city names
var cities = ["Karachi", "Islamabad", "Hydrabad", "Faislabad", "Lahore", "Quetta", "Peshawar"];

// Copy 3 elements from the cities array to selectedCities array
var selectedCities = cities.slice(0, 3); // Copying the first 3 elements

// Display the original cities array
document.write("<br><br>Q11) Cities: <br>", cities,);

// Display the selected cities array
document.write("<br>Selected Cities: <br>", selectedCities);

// 12. Write a program to create a single string from the below mentioned array:
//var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
document.write("<br><br>Q12) Array:<br>", arr)
document.write("<br>Q12) String:", "<br>This is my cat<br><br>")


//     13. Create a new array. Store values one by one in such a way
    // that you can access the values in the order in which they
    // were stored. (FIFO-First In First Out)
    let devices = [];
    devices.push("keyboard");
    devices.push("mouse");
    devices.push("printer");
    devices.push("monitor");
    document.write("<br><br>Q13) Devices:<br>", devices+"<br>");
    let Element1 = devices.shift();
    document.write("Out:<br>", Element1+"<br>");
    let Element2 = devices.shift();
    document.write("Out:<br>", Element2+"<br>");
    while (devices.length > 0) {
      let Element = devices.shift();
      document.write("Out:<br>", Element+"<br><br>");
    }

     //14. Create a new array. Store values one by one in such a way

    // that you can access the values in reverse order. (Last In-
    // First Out)
    
    var devices1 = [];
    devices1.push("keyboard");
    devices1.push("mouse");
    devices1.push("printer");
    devices1.push("monitor");
    document.write("Q14) Devices:<br>", devices1+"<br>");
    var setElement1 = devices1.pop();
    document.write("Out:<br>", setElement1+"<br>");
    var setElement2 = devices1.pop();
    document.write("Out:<br>", setElement2+"<br>");
    while (devices1.length > 0) {
      var Element4 = devices1.pop();
      document.write("Out:<br>", Element4+"<br>");
    }

   