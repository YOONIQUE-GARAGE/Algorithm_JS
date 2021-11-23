// // 01. sumTo
// // bareScale:num === 0
// // num => num
// function sumTo(num){
//   if(num === 0 || num === 1){
//     return num;
//   }
//   return num + sumTo(num-1);
// }


// let output = sumTo(10);
// console.log(output); // --> 55

// // 02. isOdd 
// // num => boolean
// // bareScale num === 0 이거나 num === 1일때!!
// function isOdd(num){
  
//   if(num === 1){
//     return true;
//   }else if(num === 0){
//     return false;
//   }

//   return isOdd(num -2);
// }

// let output = isOdd(10);
// console.log(output);

// output = isOdd(15);
// console.log(output);

// // 03. factorial
// // bareScale: 0! === 1 , 1! === 1
// // num => num
// function factorial(num){
//   if( num === 0 || num === 1 ){
//     return num;
//   }
//   return num * factorial(num - 1);
// }

// let output = factorial(10);
// console.log(output);

// // 04. fibonacci
// // number => number
// // bareScale: num === 0, num === 1 
// function fibonacci(num) {
//   if( num === 0 || num === 1){
//     return num;
//   }
//   return fibonacci(num - 2) + fibonacci(num -1);
// }

// let output = fibonacci(5);
// console.log(output); // 5

// output = fibonacci(9);
// console.log(output); // 34

// // 05. arrSum
// // arr -> number
// // bareScale: arr.length === 0;
// function arrSum(arr){
//   if(arr.length === 0){
//     return 0;
//   }
//   const [head, ...tail] = arr;
//   console.log(arr);
//   return head + arrSum(tail);
// }

// let output = arrSum([-1, -2, 1, 3]);
// console.log(output);

// // 06. arrProduct
// // arr -> number
// // bareScale: arr.length === 0
// function arrProduct(arr) {
//   if(arr.length === 0){
//     return 1;
//   }
//   const [head, ...tail] = arr;
//   return head * arrProduct(tail);
// }
// let output = arrProduct([1, -2, 1, 3]);
// console.log(output); // --> -6

// 07. arrLength
// arr -> number
// baseScale: arr.length === 0
// function arrLength(arr) {
//   if(arr.isEmpty() === true) {
//     return 0;
//   }
//   return 1 + arrLength(arr.slice(1));
// }

// let output = arrLength([1, -2, 1, 3]);
// console.log(output); // --> 4

// // 08. drop
// // num, arr -> arr
// // bareScale: 
// function drop(num, arr){
//   if(num === 0 || num === undefined){
//     return arr;
//   }else if(arr.length === 0){
//     return [];
//   }
//   const [head, ...tail] = arr;
//   return drop(num - 1, tail);
// }

// let output = drop(2, [1, -2, 1, 3]);
// console.log(output); // --> [1, 3]

// output = drop(5, [1, -2, 1, 3]);
// console.log(output); // --> [ ]

// // 09. take
// // num, arr -> arr
// // bareScale: 
// function take(num, arr){
//   if(num === 0 || arr.length === 0){
//     return [];
//   }else if( num >= arr.length){
//     return arr;
//   }
//   const [head, ...tail] = arr;
//   return [head].concat(take(num - 1, tail));
// }

// let output = take(2, [1, -2, 1, 3]);
// console.log(output); // --> [1, -2]

// output = take(5, [1, -2, 1, 3]);
// console.log(output); // --> [1, -2, 1, 3]

// // 10. and
// // arr -> boolean
// // bareScale: 
// function and(arr) {
//   if(arr.length === 0){
//     return true;
//   }
//   const [head, ...tail] = arr;
//   if(head === false){
//     return false;
//   }
//   return and(tail);
// }

// let output = and([true, true, true]);
// console.log(output); // --> true

// output = and([true, true, false]);
// console.log(output); // --> false

// // 11. or
// // arr -> boolean
// // bareScale: arr.length === 0
// function or(arr){
//   if(arr.length === 0){
//     return false;
//   }
//   const [head, ...tail] = arr;
//   if(head === true) {
//     return true;
//   }
//   return or(tail);
// }

// let output = or([true, true, false]);
// console.log(output); // --> true

// output = or([false, false, false]);
// console.log(output); // --> false

// // 12. reverseArr
// // arr -> arr
// // bareScale: arr.length === 0;
function reverseArr(arr){
  if(arr.length === 0){
    return [];
  }
  arr.slice(1)
  const [head, ...tail] = arr;
  arr.push(head);
  return reverseArr(tail);
}
let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]

// // 13. findMatryoshka
// // matryoshka, size -> boolean
function findMatryoshka(matryoshka, size) {

}

const matryoshka = {
  size: 10,
  matryoshka: {
    size: 9,
    matryoshka: null,
  },
};

let output = findMatryoshka(matryoshka, 10);
console.log(output); // --> true

output = findMatryoshka(matryoshka, 8);
console.log(output); // --> false