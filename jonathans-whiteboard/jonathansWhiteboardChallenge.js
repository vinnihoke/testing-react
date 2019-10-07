// console.log("2" - 1);
// console.log(2 - 1);
// console.log("2" + 1);

// Beginning and End Pairs
// ​
// Write a function that pairs the first number in an array with the last, the second number with the second to last, etc.
// ​
// Examples
//
// pairs([1, 2, 3, 4, 5, 6, 7]) // ➞ [[1, 7], [2, 6], [3, 5], [4, 4]]
// ​
// pairs([1, 2, 3, 4, 5, 6]) // ➞ [[1, 6], [2, 5], [3, 4]]
// ​
// pairs([5, 9, 8, 1, 2]) // ➞ [[5, 2], [9, 1], [8, 8]]
// ​
// pairs([]) ➞ []
//
// Notes
// * If the array has an odd length, repeat the middle element twice for the last pair.
// * Return an empty array if the input is an empty array.

// How I did it.
// const pairs = arr => {
//   const newArr = arr;
//   let i = 0;
//   while (i < arr.length) {
//     const first = arr.pop();
//     const last = arr.shift();
//     newArr.push([first, last]);
//     i++;
//   }
// };

// How Jonathan did it
// function pairs(arr) {
// 	let left = 0, right = arr.length - 1;
// 	const paired = [];
// 	while (left <= right) {
// 	  paired.push([arr[left], arr[right]]);
// 	  left++; right--;
// 	}
// 	return paired;
//  }

// How Jonathan rewrote my crap.
// function pairs(arr) {
//   const paired = [];
//   while (arr.length) {
//     const first = arr.shift();
//     const last = arr.pop();
//     paired.push([first, last || first]);
//   }
//   return paired;
// }

// How Alejandro and Robert did it
function pairs(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length / 2; i++) {
    newArr.push([arr[i], arr[arr.length - (1 + i)]]);
  }
  return newArr;
}

console.log(pairs([1, 2, 3, 4, 5, 6, 7]));
