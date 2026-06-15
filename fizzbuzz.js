function fizzbuzz() {
    for (let i = 1; i < 51; i++) //for loop in js with three parameters
        if (i % 3 === 0 && i % 5 === 0) { //Check if divisible by 3 and 5, if so logs FizzBuzz
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) { //Check if divisible by 3, if so logs Fizz
            console.log("Fizz")
        }
        else if (i % 5 === 0) { //Check if divisible by 5, if so logs Buzz
            console.log("Buzz")
        }
        else {
            console.log(i) //Otherwise logs the number
        }
}

fizzbuzz();