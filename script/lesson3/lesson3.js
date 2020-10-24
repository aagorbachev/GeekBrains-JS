// while {condition} {

// }

// let a = 1;
// while (a < 10) {
//   console.log(a);
//   a++;
// }

// let b = 0;
// do {
//   console.log(b);
//   b++;
// } while (b < 10);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const arr = ["a", "b", "c"];

// for (const idx in arr) {
//   console.log(idx);
//   console.log(arr[idx]);
// }

// for (const value of arr) {
//   console.log(value);
// }

// const arr = [1, 2];
// console.log(arr.length);

// if (arr.length) {
//   console.log("Not empty");
// } else {
//   console.log("Empty");
// }

// const matrix = [
//     [1,2],
//     [3,4]
// ]

const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (const i of arr) {
//   console.log(i);
// }

arr.push(4); // [1, 2, 3, 4]
console.log(arr);
arr.unshift(0); // [0, 1, 2, 3, 4]
console.log(arr);
arr.shift(); // [1, 2, 3, 4]
console.log(arr);
arr.pop(); // [1, 2, 3]
console.log(arr);

arr.forEach((v) => console.log(v));
