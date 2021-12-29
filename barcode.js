// 1, 2, 3으로만 이루어진 수열 바코드를 만들던 코드스테이츠는 물건의 가짓수가 늘어나자,
// 기존과는 다른 새로운 수열 바코드를 만드는 알고리즘을 다시 만들고자 합니다.
// 1부터 N까지의 자연수 중에서 중복 없이 M개를 고른 수열이어야 하고,
// 길이가 M이어야 한다고 할 때, 만들 수 있는 바코드를 전부 배열에 담아 반환하는 함수를 작성하세요.

const test2 = function foo(n, m) {
  // n: 주어진자연수범위, m: 바코드 길이
  // if n=2, m=1
  // 중복 없다 -> 순서중요 -> 순열 -> nCr = n!/(n-r)!
  // 하나하나의 원소 다 불러오기
  //const result = [];
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  const permutation = function (arr, m) {
    const result = [];
    // bmr-> m === 1는 각각의 원소에 [] 해서 리턴
    if (m === 0) {
      return result;
    } else if (m === 1) {
      return arr.map((el) => el);
    }
    // m !== 1일때
    // 하나의 수 고정하고, 나머지 배열 다시 재귀돌리기
    arr.forEach((fixed, idx, origin) => {
      // 선택한수 제외하고 왼쪽 오른쪽 배열 붙이기
      const left = origin.slice(0, idx);
      const right = origin.slice(idx + 1);
      const restArr = [...left, ...right];
      // const tail = origin.slice(1);
      // 고정된 수 제외하고 나머지 tail에 대해 재귀함수 돌리기
      const permutations = permutation(restArr, m - 1);
      // 고정된 값에 재귀함수 돌린 결과값들 합해주기
      const total = permutations.map((el) =>
        Number(String(fixed) + String(el))
      );
      // result에 넣어주기
      result.push(...total);
    });

    return result;
  };
  return permutation(arr, m);
};

// const test2 = function foo(n, m) {
//   // n: 주어진자연수범위, m: 바코드 길이
//   // if n=2, m=1
//   // 중복 없다 -> 순서중요 -> 순열 -> nCr = n!/(n-r)!
//   // 하나하나의 원소 다 불러오기
//   //const result = [];
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }

//   // 방문여부
//   let visited = new Array(arr.length).fill(0);
//   let answer = [];
//   let result = [];

//   const dfs = (depth) => {
//     // BMR
//     if (depth === m) {
//       // 깊이가 m과 같을 때는 result return
//       console.log(result);
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         // visited에 없어야함
//         if (visited[i] === 0) {
//           // 하나뽑아서 result에 넣음
//           result[depth] = arr[i];
//           // 방문표시
//           visited[i] = 1;
//           dfs(depth + 1);
//           // 다시 돌아간 후 방문표시 지우기
//           visited[i] = 0;
//         }
//       }
//     }
//   };
//   dfs(0);
//   console.log(answer);
// };

// 모든 바코드는 같은 숫자가 있으면 안 됩니다.

// N이 2이고 M이 1일 때, 1, 2를 사용하여 1의 길이에 맞는 바코드를 만들어야 합니다.
const output1 = test2(2, 1);
console.log(output1); // --> [1, 2]

// N이 3이고 M이 2일 때, 1, 2, 3을 사용하여 2의 길이에 맞는 바코드를 만들어야 합니다.
const output2 = test2(3, 2);
console.log(output2); // --> [12, 13, 21, 23, 31, 32]

// N이 3고 M이 3일 때 1, 2, 3을 사용하여 3의 길이에 맞는 바코드를 만들어야 합니다.
const output3 = test2(3, 3);
console.log(output3); // --> [123, 132, 213, 231, 312, 321]
