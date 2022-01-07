const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // TODO: 여기에 코드를 작성합니다.
  // 첫번째 소문이 퍼진곳을 기준으로 0이 아니고 1이면 x로 표시하기
  // village만큼 배열생성해서 기본 0으로 셋팅 소문이 퍼진곳은 1로 만들기
  let isDone = [];
  // 상하좌우 모두 undefined이면
  // 첫번째소문 퍼진 곳
  let curLocation = village[row][col];
  isDone.push({ row, col });

  // 이 부분 반복
  // 상하좌우가 undefined가 아닌지
  // 0인지 아닌지 판별
  // 상
  curLocation = village[row - 1][col];
  console.log(`상: ${curLocation} / x: ${row - 1} / y: ${col}`);
  if (curLocation !== undefined && curLocation != 0) {
    isDone.push({ row: row - 1, col });
  }
  // 우
  curLocation = village[row][col + 1];
  console.log(`우: ${curLocation} / x: ${row} / y: ${col + 1}`);
  if (curLocation !== undefined && curLocation != 0) {
    isDone.push({ col: col + 1, row });
  }
  // 하
  curLocation = village[row + 1][col];
  if (curLocation !== undefined && curLocation != 0) {
    isDone.push({ col, row: row + 1 });
  }
  // 좌
  curLocation = village[row][col - 1];
  if (curLocation !== undefined && curLocation != 0) {
    isDone.push({ col: col - 1, row });
  }

  return isDone;
};

let village = [
  "0101", // 첫 번째 줄
  "0111",
  "0110",
  "0100",
];
let row = 1;
let col = 2;
let output = gossipProtocol(village, row, col);
console.log(output); // --> 3
/*
1. 시작: (1, 2)에서 시작, 소문이 퍼진 곳을 x로 표기
  [
  '0101',
  '01x1',
  '0110',
  '0100',
  ]

2. 1일 뒤
  [
  '0101',
  '0xxx',
  '01x0',
  '0100',
  ]

3. 2일 뒤
  [
  '0x0x',
  '0xxx',
  '0xx0',
  '0100',
  ]

4. 3일 뒤: 소문이 전부 퍼짐 (끝)
 [
  '0x0x',
  '0xxx',
  '0xx0',
  '0x00',
 ]
*/
