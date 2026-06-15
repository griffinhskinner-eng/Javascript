const targetElement = document.getElementById("fizzbuzz"); // Find the HTML element with the ID "hello-world" to connect

function fizzbuzz() {
    for (let i = 1; i < 51; i++) {//for loop in js with three parameters
        if (i % 3 === 0 && i % 5 === 0) { //Check if divisible by 3 and 5, if so logs FizzBuzz
            console.log("FizzBuzz");
            targetElement.textContent += "FizzBuzz" + "\n"; 
        }
        else if (i % 3 === 0) { //Check if divisible by 3, if so logs Fizz
            console.log("Fizz");
            targetElement.textContent += "Fizz" + "\n";
        }
        else if (i % 5 === 0) { //Check if divisible by 5, if so logs Buzz
            console.log("Buzz");
            targetElement.textContent += "Buzz" + "\n";
        }
        else {
            console.log(i); //Otherwise logs the number
            targetElement.textContent += i+ "\n"; //Concatinate so it reads with newline
        }
    }
}

fizzbuzz();