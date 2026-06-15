const targetElement = document.getElementById("strings");

const  restaurant = "McDonalds";
const meal = "Hamburger";

//Slicing - Javascript strings are immutable, meaning that they can not be modified.  But you can copy parts of a string using a built in .slice function
function slice(){
    const partialRestaurant = restaurant.slice(0,5)
    const partialMeal = meal.slice(3,9)
    console.log(partialRestaurant + " " + partialMeal)
    targetElement.textContent += partialRestaurant + " " + partialMeal + "\n";
}

//concatination - like python, I can concatinate a string by using a + - this works with variables and strings themselves
function concatinate(){
    const restaurantMeal = restaurant + " " + meal
    console.log(restaurantMeal)
    targetElement.textContent += restaurantMeal + "\n"; 
}

slice()
concatinate()

