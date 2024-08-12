//THE BASIC 13 ALGORITHMS
//These are foundational algorithm challenges. Write a JavaScript function for each.
//A suggested function name has been set up for you.
//Can you finish all of these challenges in 2 minutes or less each?


// //1) Print 1 to 55:
// //Print all the integers from 1 to 55
// function Print1To55() {
//   for (var i = 0; i <= 55; i++) {
//     console.log(i);
//   }
// }

// //2) Print Odds 1 to 55:
// //Print all the odd integers from 1 to 55
// function PrintOdds1To55() {
//   for (var i = 1; i <= 55; i += 2) {
//     console.log(i);
//   }
// }

// //3) Print Ints and Sum 0-55:
// //Print integers from 0 to 55, and with each integer print the sum so far
// function PrintIntsAndSum0To55() {
//   var sum = 0;
//   for (var i = 0; i <= 55; i++) {
//     sum = sum + i;
//     console.log(i + ' | CURRENT SUM: ' + sum);
//   }
// }

// //4) Print Array Values:
// //Iterate through a given array(input), printing each value
// function PrintArrayVals(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// //5) Print Max of an Array:
// //Given an array, find and print the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
// function PrintMaxOfArray(arr) {
//   var max = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log(max)
// }
// //6) Print Average of an Array:
// //Given an array, analyze and print the average number in the array. (e.g. for [4,3,5,8] avg is 5)
// function PrintAverageOfArray(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   var average = sum / arr.length;
//   console.log(average);
// }

// //7) Return Array of Odds 1 t0 55:
// //Create an array with all the odd integers between 1 and 55 (inclusive)
// function ReturnOddsArray1To55() {
//   var newArray = [];
//   for (i = 1; i <= 55; i += 2) {
//     newArray.push(i);
//   }
//   return newArray;
// }

// //8) Square Array Values:
// //Given an array, square each value and return the array with changed values
// function SquareArrayValues(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var numSquared = arr[i] * arr[i];
//     arr[i] = numSquared;
//   }
//   return arr;
// }
// console.log(SquareArrayValues([1, 3, 5, 2, 4]));
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
// //10) Zero Out Array Negative Numbers:
// //Return the given array, with all negative numbers replaced by zero
// function ZeroOutArrayNegativeVals(arr) {
//   var zero = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < zero) {
//       arr[i] = zero;
//     }
//   }
//   return arr;
// }
// //11) Print Max, Min, Average Array Values:
// //Given an array of values, print the max, min and average values for that Array
// function PrintMaxMinAverageArrayVals(arr) {
//   var min = arr[0];
//   var max = arr[0];
//   var sum = 0;
//   var avg;

//   for (var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     else if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   avg = sum / arr.length;
//   console.log('Min: ' + min + ' Max: ' + max + ' Average: ' + avg)
// }
// //12 Shift Array Values Left
// //Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 value at the end of the array
// //Can you do this without using any built in methods such as "unshift", "pop", and "push"?
// function ShiftArrayValsLeft(arr) {
//   for (var i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = 0;
//   return arr;
// }
// //13 Swap String for Array Negative Values
// //Given an array of numbers, replace any negative values with the string "Skillspire"
// function SwapStringForArrayNegativeVals(arr) {
//   var zero = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < zero) {
//       arr[i] = 'Skillspire';
//     }
//   }
//   return arr;
// }


// console.log(ShiftArrayValsLeft([-1, 3, -5, 2, 4]));

// console.log(PrintMaxMinAverageArrayVals([-1, 3, -5, 2, 4]))

// console.log(PrintMaxOfArray([-3,3,5,7]));

// console.log(ReturnOddsArray1To55());

// console.log(SwapStringForArrayNegativeVals([-1, 3, -5, 2, 4]));





// console.log(PrintAverageOfArray([4,3,5,8]));

// console.log(PrintIntsAndSum0To55());

// console.log(Print1To55());

