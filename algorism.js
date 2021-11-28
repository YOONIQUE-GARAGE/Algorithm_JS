// // 1. transformFirstAndLast
// // arr -> object
function transformFirstAndLast(arr) {
  if (arr.length === 0){
    return {};
  }
  let anwser = {};
  anwser[arr[0]] = arr[arr.length - 1];
  return anwser;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
let output = transformFirstAndLast(arr);
console.log(output); // --> { Queen : 'Beyonce' }

arr = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'];
output = transformFirstAndLast(arr);
console.log(output); // --> { Kevin : 'Spacey' }

// // 15. modulo
// // num1, num2 -> number
// // num1 === 0, num2 === 0

// // function modulo(num1, num2) {
// //   if(num1 === 0 || num1 === num2){
// //     return 0;
// //   }else if( num2 === 0) {
// //     return 'Error: cannot divide by zero';
// //   }
// //   while(num1 > num2){
// //     num1 = num1 - num2;
// //   }
// //   return num1;
// // }

// // let output = modulo(25, 4);
// // console.log(output); // --> 1

// // // 16. islsogram
// // // str -> boolean
// function isIsogram(str) {
//   // 모든 문자를 소문자 혹은 대문자로 변환
//   // 값을 다른 배열에 담고, 배열에 있는거랑 현재가 다른지 확인!
//   str = str.toLowerCase();
//   let arr = str.split('');
//   let result = [arr[0]];
  
//   for(let i = 1; i < arr.length; i++){
//     for(let el of result){
//       if(el === arr[i]){
//         return false;
//       }
//     }
//     result.push(arr[i]);
//   }
//   return true;
// }

// let output = isIsogram('aba');
// console.log(output); // false

// output = isIsogram('Dermatoglyphics');
// console.log(output); // true

// output = isIsogram('moOse');
// console.log(output); // false

// // 17. computeSquareRoot
// // num -> num

