// (x,y)와 2차원 배열의 차이점
// 2차원배열은 arr[i][j]이면 세로축기준으로 i만큼 아래 있고,
// 가로축 기준으로 j만큼 옆에 있는걸 뜻한다.
const rotateMatrix = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
  // 90도 회전시 해당 2차원 배열 리턴
  // 세로(col)
  const N = matrix.length;
  // 가로(row)
  const M = matrix[0].length;
  let result = [];
  for (let i = 0; i < N; i++) {
    result[i] = [];
    for (let j = 0; j < M; j++) {
      result[i][j] = matrix[M - j - 1][i];
    }
  }
  return result;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(matrix[0][0]); // --> 1
console.log(matrix[3][2]); // --> 15

const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix[0][0]); // --> 13
console.log(rotatedMatrix[3][2]); // --> 8
