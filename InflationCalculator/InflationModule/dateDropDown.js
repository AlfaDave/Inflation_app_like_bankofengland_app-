//reference to script
import { minYear, maxYear } from "./pullFirstLastDates.js";
// gets the element
const yearDropDown = document.getElementById("startDate");
const endYearDropDown = document.getElementById("endDate");

// gets the min and max year from inflation values which auto sets the dates by the object elements.
const startingPoint = minYear;
const endingPoint = maxYear;

// for loop going through each year from my min and max dates 
// set by pulling the dates out of the inflation values which are linked inside the 
// pullFirstLastDates script.

    // setting the const option to the html doc element option.    
    // setting the value of the const option to the year for both the value and the text.    
    // appending the option to the child object.
for (let inputYear = startingPoint; inputYear <= endingPoint; inputYear++){
    const option = document.createElement("option");
    option.value = inputYear;
    option.text = inputYear;
    yearDropDown.appendChild(option);
}
 
for (let outputYear = startingPoint; outputYear <= endingPoint; outputYear++){
    const option = document.createElement("option");
    option.value = outputYear;
    option.text = outputYear;
    endYearDropDown.appendChild(option);
}