// 부분집합인지 여부를 리턴
// arr(number), number (중복없음) -> boolean
// 방법1. 실행초과
// const isSubsetOf = function (base, sample) {
// for (let el of sample) {
//   let arr = base.filter((one) => one === el);
//   if (arr.length === 0) {
//     return false;
//   }
// }
// return true;
// }

// 방법2. 실행초과
// const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  // 부분집합 -> 결국 해당 숫자가 존재하면됌.
  // 숫자를 크기대로 정렬한다.
  // 후에 비교해서 아닐경우 i++하고, base[i] > sample[j]인 경우 false
//   base = base.sort();
//   sample = sample.sort();
//   // bareMinimun
//   if(sample[sample.length - 1] > base[base.length -1 ] || sample[0] < base[0]){
//     return false;
//   }
//   let result = false;
//   for( let i = 0; i < sample.length; i++){
//     for(let j = i; base.length; j++){
//       if(sample[i] === base[j]){
//         result = true;
//         break;
//       }else {
//         result = false;
//       }
//     }
//   }
//   return result;
// };

// 시도4. 실행초과
// const isSubsetOf = function (base, sample) {
//   base.sort();
//   sample.sort();
//   let result = [];
//   for(let el of sample){
//     if(!!base.includes(el)){
//       result.push(true);
//     } else {
//       result.push(false);
//     }
//   }
  
//   if( result.includes(false)){
//     return false;
//   }
//   return true;
// } 

//시도5. 실행초과
// const isSubsetOf = function (base, sample) {
//     let num = 0;
//     for(let el of sample){
//       if(!!base.includes(el)){
//         num++;
//       } 
//     }
//     if( num === sample.length ){
//       return true;
//     }
//     return false;
//   } 

const isSubsetOf = function (base, sample) {
  base.sort();
  sample.sort();
  for(let i = 0; i < base.length; i++) {
    if(base[i] === sample[0]) {
      sample.shift();
    }
  }
  if(sample.length === 0){
    return true;
  }
  return false;
} 
let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
