// 01. 순서대로 나오게 하기
// const spiralTraversal = function (matrix) {
//   // matrix[0].length만큼 돌면서 matrix.length가 끝날때까지 돌기
//   // 먼저 배열의 각 배열 원소를 붙이는 것부터 하기
//   let result = [];
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       result.push(matrix[i][j]);
//     }
//   }

//   let tatal = result.reduce((acc, cur) => {
//     acc = acc + cur;
//     return acc;
//   });

//   console.log(tatal);
// };

// 02. 시계방향으로 순회하여 값가져오기
const spiralTraversal = function (matrix) {
  let result = [];

  const rotateMatrix = function (matrix, rotateNum) {
    rotateNum = rotateNum % 4;
    if (rotateNum === 0) return matrix;
    const M = matrix[0] && matrix[0].length;
    const N = matrix.length;
    const rc = rotateNum % 2 === 0 ? [N, M] : [M, N];
    const result = [];
    for (let r = 0; r < rc[0]; r++) {
      result[r] = [];
      for (let c = 0; c < rc[1]; c++) {
        if (rotateNum === 1) {
          result[r][c] = matrix[c][M - r - 1];
        } else if (rotateNum === 2) {
          result[r][c] = matrix[N - r - 1][M - c - 1];
        } else {
          result[r][c] = matrix[N - c - 1][r];
        }
      }
    }
    return result;
  };
  let rotateNum = 0;
  result.push(matrix[0][0]);
  while (rotateNum < 4) {
    const roMatrix = rotateMatrix(matrix, rotateNum);
    //console.log(roMatrix);
    for (let i = 1; i < roMatrix[0].length; i++) {
      result.push(roMatrix[0][i]);
    }
    rotateNum = rotateNum + 1;
  }
  result.pop();
  const rs = result.reduce((acc, cur) => {
    acc = acc + cur;
    return acc;
  });
  return rs;
};

let matrix = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];
let output = spiralTraversal(matrix);
console.log(output); // --> 'ABCFIHGDE'

matrix = [
  ["T", "y", "r", "i"],
  ["i", "s", "t", "o"],
  ["n", "r", "e", "n"],
  ["n", "a", "L", " "],
];
output = spiralTraversal(matrix);
console.log(output); // --> 'Tyrion Lannister'
