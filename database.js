//The javascrit equivalent of a python dictionary is called an object.  Its similar in the sense that it stores value key-value pairs 
const targetElement = document.getElementById("database");
const users = [ //const means constant.  I can't change the variable name users but I can change and append/remove data inside
    { //Curly brackets are objects, within an array (square brackets)
        username: "Gskinns08",
        password: "876682",
        age: 17,

    },
    {
        username: "Mr.Deboomer",
        password: "978531",
        age: 24,

    },
    {
        username: "BGonns1",
        password: "286103",
        age: 18,

    },
    {
        username: "JFaz!",
        password: "713490",
        age: 20,

    },
]

//Show number of users
function usersNumber() {
    const totalUsers = users.length //.length method finds the number of entries in a given array
    console.log(totalUsers);
    targetElement.textContent += "Total Users:" + totalUsers + "\n"; 
}

//Find average age
function averageAge() {
    let totalAge = 0;
    for (let i = 0; i < users.length; i++) {
        totalAge += users[i].age
    }
    
    const avgAge = totalAge/users.length

    console.log(avgAge);
    targetElement.textContent += "Average User Age:" + avgAge; 

}

usersNumber()

averageAge()