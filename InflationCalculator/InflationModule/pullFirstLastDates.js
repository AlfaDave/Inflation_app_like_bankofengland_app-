//reference to script
import { inflationValues } from "./inflationValuesUK.js";

// two default values as fails
export let minYear = 2023;
export let maxYear = 2024;

// gains the first elements date in the object key value pair
const firstElement = Object.entries(inflationValues)[0];

// sets minyear to the result by taking array value 0
minYear = firstElement[0];

// gets the object length
const last = Object.entries(inflationValues).length;

// gets the last last value out of the object KVP array
const lastYear = Object.entries(inflationValues)[last-1];

// sets the max year to the last year value and takes the first key.
maxYear = lastYear[0];