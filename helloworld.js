console.log("hello world from console"); //console.log puts writing down in the console of a web page.  To be accessed by right clicking and going to inspect, then console

const targetElement = document.getElementById("hello-world"); // Find the HTML element with the ID "hello-world" to connect
targetElement.textContent = "Hello world from JavaScript file."; //Print text content, "Hello World from Javascript file"
