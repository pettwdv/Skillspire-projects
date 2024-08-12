//THE BASIC 13 ALGORITHMS
//These are foundational algorithm challenges. Write a JavaScript function for each.
//A suggested function name has been set up for you.
//Can you finish all of these challenges in 2 minutes or less each?


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