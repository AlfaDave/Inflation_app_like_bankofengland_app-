//reference to script
import { inflationValues } from "./InflationModule/inflationValuesUK.js";
import { maxYear } from "./InflationModule/pullFirstLastDates.js";

// these get the document elements
// year gets set by pulling the Date().getFullYear function data.
const year = maxYear;//new Date().getFullYear(); 
// Could use the machine current year this might cause error
// if data isnt availible for the current year in the data set.



// it then creates a temp variable which takes the value and divides
function inflationCalculator() {
    let dateIn = document.getElementById("startDate").value;
    let dateOut = document.getElementById("endDate").value;
    let inputValue = parseFloat(document.getElementById("amount").value);

    const thenValue = getPointValueForThen(dateIn);
    const nowValue = getPointValueForNow(dateOut);
    const rate = nowValue/thenValue;
    //console.log(rate);
    // =now/then

    //console.log(inputValue);
    const valueToday = inputValue * rate;
    const roundedValue = valueToday.toFixed(2);
    //console.log(roundedValue);
    let result = document.getElementById("result");
    result.innerHTML += "Paying in £"+inputValue+ " in the year " + dateIn + "<br>You get £" + roundedValue + " in the year " + dateOut +"<br>";
    return roundedValue;
    
}

function getPointValueForThen(dateIn) {
    // bloody dynamic types grrrrr
    const numValue = parseInt(dateIn, 10);
    for (let key in inflationValues) {
        if (key == numValue) {// == with type conversion
            return inflationValues[key];
        }
    }
}
function getPointValueForNow(dateOut){
    for (let key in inflationValues) {
        if (key === dateOut) { // === without type conversion
            return inflationValues[key];
        }
    }
}

// add a listener on the document
let form = document.getElementById("inflationForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    inflationCalculator();    
  });
