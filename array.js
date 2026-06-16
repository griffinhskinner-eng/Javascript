const targetElement = document.getElementById("array");

let myArray = ["apples", "bananas", "oranges", "kiwis", "strawberrys"] //Make an array in java is similar to python -->  I use let instead of const because I want to iterate.  Typically let is used for variables that you want to change, constant is for hardcoded variables that should remain constant, and 


console.log("Initial", [...myArray]);//The comma seperates the Initial and array. ... is called a spread operator and it seperates the parts of a list to form a table
targetElement.textContent += "Initial Array: " + myArray.join(", ") + "\n\n";//Prints off the array --> the .join method allows me to seperate with a character (in this case a comma)

myArray.push("blueberries")//.push adds a new element at the end of the array
console.log("After Push", [...myArray]);
targetElement.textContent += "New Element Array: " + myArray.join(", ") + "\n\n";

myArray.shift()//.shift removes the first element of an array
console.log("After shift:");
console.table(myArray); //.table is a different way to show an array like a table but it only shows that the latest adapted table so I can only use it on the last iteration
targetElement.textContent += "Removed Element Array: " + myArray.join(", ") + "\n\n";
