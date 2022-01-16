// const LSCS = function (arr) {
//   //TODO: 여기에 코드를 작성합니다.
//   // 부분집합 구하기
//   // 정렬 및 중복제거
//   const sortedArr = arr.sort();

//   let rs = [];
//   const dfs = (arr, depth) => {
//     if (depth === sortedArr.length) {
//       arr.slice().sort();
//       let total = 0;
//       for (let el of arr) {
//         if (el === undefined) {
//           el = 0;
//         }
//         total = total + el;
//       }
//       rs.push(total);
//       return;
//     } else {
//       arr[depth] = sortedArr[depth];
//       dfs(arr, depth + 1);
//       arr[depth] = undefined;
//       dfs(arr, depth + 1);
//     }
//   };
//   dfs([], 0);

//   return `${rs.sort().splice(-1)}`;
// };

const LSCS = function (arr) {
  let arrSum = 0;
  // 가장 작으수로 초기화
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    arrSum = arrSum + arr[i];
    if (arrSum > max) max = arrSum;

    // 연속된 구간의 합이 음수인 경우, 합 버리고 다시시작
    if (arrSum < 0) {
      arrSum = 0;
    }
  }
  return max;
};

let output = LSCS([1, 2, 3]);
console.log(output); // --> 6

output = LSCS([1, 2, 3, -4]);
console.log(output); // --> 6 ([1, 2, 3])

output = LSCS([1, 2, 3, -4, 5]);
console.log(output); // --> 7 ([1, 2, 3, -4, 5])

output = LSCS([10, -11, 11]);
console.log(output); // --> 11 ([11])
