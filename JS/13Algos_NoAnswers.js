//THE BASIC 13 ALGORITHMS
//These are foundational algorithm challenges. Write a JavaScript function for each.
//A suggested function name has been set up for you.
//Can you finish all of these challenges in 2 minutes or less each?


//1) Print 1 to 55:
//Print all the integers from 1 to 55
function Print1to55() {
   for (var i= 1; i <= 55; i++){
       console.log(i);
   }
}
Print1to55();


//2) Print Odds 1 to 55:
//Print all the odd integers from 1 to 55
function printOdds1to55() {
for (var i = 1; i<= 55; i++ )
if(i % 2 !== 0){
    console.log(i);
  } 

}
printOdds1to55();

//3) Print Ints and Sum 0-55:
//Print integers from 0 to 55, and with each integer print the sum so far
function PrintIntsAndSum0to55() {
    var sum = 0;
    for (var i= 0; i <= 55; i++){
        sum++;
        console.log('Int is' +' '+ i +'. '+ 'Sum is' +' ' + sum + '. ');
 }
}
PrintIntsAndSum0to55();

//4) Print Array Values:
//Iterate through a given array(input), printing each value
function printArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      
    }
  }
  var arr =["Peaches", "Apples","Grapes","Strawberries", "Blueberries"];
  printArrayVals(arr);
  
//5) Print Max of an Array:
//Given an array, find and print the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function PrintMaxOfArray(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    console.log(max)
  }
  PrintMaxOfArray([-3,3,5,7]);

//6) Print Average of an Array:
//Given an array, analyze and print the average number in the array. (e.g. for [4,3,5,8] avg is 5)
function PrintAverageOfArray(arr) {
  var sum = 0;
 
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  var average = sum / arr.length;
  console.log(average);
}
var arr = [78, -52, 66, 845, 24, 151, -5];
PrintAverageOfArray(arr);

//7) Return Array of Odds 1 t0 55:
//Create an array with all the odd integers between 1 and 55 (inclusive)
function ReturnOddsArray1To55() {
    var newArray = []
    for (i = 1; i <= 55; i += 2) {
      newArray.push(i);
    }
    return newArray;
  }
  ReturnOddsArray1To55();

//8) Square Array Values:
//Given an array, square each value and return the array with changed values
function SquareArrayValues(arr) {
    for (var i = 0; i < arr.length; i++) {
      var numSquared = arr[i] * arr[i];
      arr[i] = numSquared;
    }
    return arr;
  }
  SquareArrayValues([1, 3, 5, 2, 4]);
  

//9) Return Array Count Greater Than Y:
//Given an array of numbers and a value "Y", count and print the number of array values greater than "Y"
function ReturnArrayCountGreaterThanY(arr, y) {
  var numCount = 0
  var values = []
  for (i = 0; i < arr.length; i ++) {
    if (arr[i] > y) {
      // numCount = numCount + 1;
      numCount++;
      values.push(arr[i]);
    }
  }
  console.log(values);
}
ReturnArrayCountGreaterThanY([1, 6, 5, 8, 4], 2);

//10) Zero Out Array Negative Numbers:
//Return the given array, with all negative numbers replaced by zero
function zeroOutNegativeVals() {

}

//11) Print Max, Min, Average Array Values:
//Given an array of values, print the max, min and average values for that Array
function printMaxMinAvgArrayVals() {

}

//12 Shift Array Values Left
//Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 value at the end of the array
//Can you do this without using any built in methods such as "unshift", "pop", and "push"?
function shiftArrayValsLeft() {

}

//13 Swap String for Array Negative Values
//Given an array of numbers, replace any negative values with the string "Skillspire"
function swapStringForArrayNegVals() {

}