// 01. 순서대로 나오게 하기
const spiralTraversal = function (matrix) {
  // matrix[0].length만큼 돌면서 matrix.length가 끝날때까지 돌기
  // 먼저 배열의 각 배열 원소를 붙이는 것부터 하기
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result.push(matrix[i][j]);
    }
  }

  let tatal = result.reduce((acc, cur) => {
    acc = acc + cur;
    return acc;
  });

  console.log(tatal);
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
