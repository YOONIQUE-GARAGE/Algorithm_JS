// (x,y)와 2차원 배열의 차이점
// 2차원배열은 arr[i][j]이면 세로축기준으로 i만큼 아래 있고,
// 가로축 기준으로 j만큼 옆에 있는걸 뜻한다.
// 1번회전시
// const rotateMatrix = function (matrix) {
//   // TODO: 여기에 코드를 작성합니다.
//   // 90도 회전시 해당 2차원 배열 리턴
//   // 세로(col) - i
//   const N = matrix.length;
//   // 가로(row) - j
//   const M = matrix[0].length;
//   let result = [];
//   // 원래 N * M
//   // 90도 회전시 M * N
//   for (let i = 0; i < M; i++) {
//     result[i] = [];
//     for (let j = 0; j < N; j++) {
//       result[i][j] = matrix[N - j - 1][i];
//     }
//   }
//   return result;
// };

// M * N인 2차원 배열 K번 회전시
const rotateMatrix = function (matrix, rotateNum = 1) {
  // rotateNum은 4회 주기로 원상복기된다.
  rotateNum = rotateNum % 4;
  // 회전하지 않을 경우
  if (rotateNum === 0) return matrix;
  // 세로(col)
  const M = matrix[0] && matrix[0].length;
  // 가로(row)
  const N = matrix.length;
  // K가 홀수일때, 짝수일때 행과 열의 변화
  const rc = rotateNum % 2 === 0 ? [N, M] : [M, N];
  // 반환할 배열 생성
  const result = [];
  // 가로길이는 rc의 첫번째 요소가 됌
  // 겉 생성
  for (let r = 0; r < rc[0]; r++) {
    result[r] = [];
    // 각각의 배열 속 생성
    for (let c = 0; c < rc[1]; c++) {
      if (rotateNum === 1) {
        result[r][c] = matrix[N - c - 1][r];
      } else if (rotateNum === 2) {
        result[r][c] = matrix[N - r - 1][M - c - 1];
      } else {
        result[r][c] = matrix[c][M - r - 1];
      }
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
