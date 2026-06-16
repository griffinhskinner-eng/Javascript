const targetElement = document.getElementById("strings");

const  restaurant = "McDonalds";
const meal = "Hamburger";

//Slicing - Javascript strings are immutable, meaning that they can not be modified.  But you can copy parts of a string using a built in .slice function
function slice(){
    const partialRestaurant = restaurant.slice(0,5)
    const partialMeal = meal.slice(3,9)
    console.log("Slicing:  " + partialRestaurant + " " + partialMeal)
    targetElement.textContent += "Slicing:  " + partialRestaurant + " " + partialMeal + "\n";
}

//Concatination - like python, I can concatinate a string by using a + - this works with variables and strings themselves
function concatinate(){
    const restaurantMeal = restaurant + " " + meal
    console.log("Concatination:  " + restaurantMeal)
    targetElement.textContent += "Concatination:  " + restaurantMeal + "\n"; 
}

//Palendroming - I just reversed the word by loopong through each letter backwards similar to how we learned in Python
function reverseString(){
    let reversedRestaurant = "";
    for (let i = restaurant.length - 1; i>=0; i--){
        reversedRestaurant += restaurant[i];
    }

    let reversedMeal = "";
    for (let i = meal.length - 1; i>=0; i--){
        reversedMeal += meal[i];
    }

    console.log("Reversed:  " + reversedMeal + " " + reversedRestaurant)
    targetElement.textContent += "Reversed:  " +  reversedMeal + " " + reversedRestaurant + "\n";         
}

slice()
concatinate()
reverseString()

