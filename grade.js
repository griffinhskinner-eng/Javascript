const gradeInput = document.getElementById("grade");
const convertButton = document.getElementById("convertButton");
const result = document.getElementById("result");

function convertGrade(){
    const grade = Number(gradeInput.value);

    if (grade <= 100 && grade >= 80) { //Check if between 80 and 100, then print off letter grade to console and html code
            console.log("A");
            result.innerHTML = `
            <p><strong>Grade:</strong> A</p> 
            `
        }   
    else if (grade <= 79 && grade >= 70) { 
        console.log("B");
        result.innerHTML = `
            <p><strong>Grade:</strong> B</p> 
            `
        }
    else if (grade <= 69 && grade >= 60) { 
        console.log("C");
        result.innerHTML = `
            <p><strong>Grade:</strong> C</p> 
            `
        }  
    else if (grade <= 59 && grade >= 50) { 
        console.log("D");
        result.innerHTML = `
            <p><strong>Grade:</strong> D</p> 
            `
        }
    else if (grade <= 49 && grade >= 0) { 
        console.log("F");
        result.innerHTML = `
            <p><strong>Grade:</strong> F</p> 
            `
        }
    else { 
        console.log("Invalid Input");
        result.innerHTML = `
            <p><strong>Invalid Grade!</strong> Please input a grade value that is a number between 0 and 100!</p> 
            `
        }
}

convertButton.addEventListener("click", convertGrade);