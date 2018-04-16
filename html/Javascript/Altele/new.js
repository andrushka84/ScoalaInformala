
//Exercise from The Complete Web Developer in 2018: Zero to Mastery- Arrays - Exercises;

// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

var arr = array.shift();
console.log(arr);

// 2. Sort the array in order
var arr2 = array.sort();
console.log(arr2);
// 3. Put "Kiwi" at the end of the array
var arr3 = array.push("Kiwi");
console.log(arr3);
// 4. Remove "Apples" from the array.
var arr4 = array.shift();

//  5. Sort the array in reverse order.
var arr5 = array.sort();
var arr6 = array.reverse();
console.log(arr6);


// you should have at the end:["Oranges", "Kiwi", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
var arr7 = array2[1][1][0];
console.log(arr7);