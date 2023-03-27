//Assumes input is given as an array

//Define function
function sortedUniqueNumbers(numbers){

//Ensures input is an Array
if(!Array.isArray(numbers)){
    throw new Error('Input must be an array');
} 

//Ensures list has 10 numbers
if (numbers.length !== 10){
    throw new Error("input must be 10 numbers")
}

//Ensures numbers in list range between 1 to 100
for (let i = 0; i< numbers.length; i++){
if (numbers[i] < 0 || numbers[i]> 100) {
    throw new Error("input must be between 0 and 100");
}}

//Remove duplicates
const noDuplicates = [...new Set(numbers)];

//Sort remaining numbers in descending order
const orderedNumbers = noDuplicates.sort((a, b) => b - a);
return orderedNumbers;
}
//Check it works
var numbers = [1, 2, 1, 2, 44, 33, 22, 44, 22, 73];
var result = sortedUniqueNumbers(numbers);
console.log(result);

//check numbers out of assumed range
var numbers = [1, 2, 1, 2, 44, 33, 22, 44, 22, 703];
var result = sortedUniqueNumbers(numbers);
console.log(result);

//check numbers out of assumed range
var numbers = [1, 2, 1, 2, 44, 33, 22, 44, 22, 30, 13, 12];
var result = sortedUniqueNumbers(numbers);
console.log(result);
