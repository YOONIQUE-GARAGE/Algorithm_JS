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

// 방법2.
const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  // 부분집합 -> 결국 해당 숫자가 존재하면됌.
  // 숫자를 크기대로 정렬한다.
  // 후에 비교해서 아닐경우 i++하고, base[i] > sample[j]인 경우 false
  base = base.sort();
  sample = sample.sort();
  // bareMinimun
  if (
    sample[0] > base[base.length - 1] ||
    sample[sample.length - 1] < base[0]
  ) {
    return false;
  }
  //
};

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
