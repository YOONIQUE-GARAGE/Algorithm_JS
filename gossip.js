const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

// 2차원 배열 만들기
function arr2(rowLeng, columnLeng) {
  const arr = new Array(rowLeng).fill(0);
  for (let i = 0; i < rowLeng; i++) {
    arr[i] = new Array(columnLeng).fill(0);
  }
  return arr;
}

const gossipProtocol = function (village, row, col) {
  // TODO: 여기에 코드를 작성합니다.
  // 첫번째 소문이 퍼진곳을 기준으로 0이 아니고 1이면 x로 표시하기
  // village만큼 배열생성해서 기본 0으로 셋팅 소문이 퍼진곳은 1로 만들기
  const isKnow = arr2(village.length, village[0].length);
  let isDone = [];
  // 상하좌우 모두 undefined이면
  // 첫번째소문 퍼진 곳
  let curLocation = village[row][col];
  isKnow[row][col] = 1;
  //isDone.push({ row, col });

  // 이 부분 반복
  // 상하좌우가 undefined가 아닌지
  // 0인지 아닌지 판별

  const spreadNext = function (isKnow) {
    // 매트릭스로 판단?
    // 상
    curLocation = village[row - 1][col];
    if (curLocation !== undefined && curLocation != 0) {
      isKnow[row - 1][col] = 1;
    }
    // 우
    curLocation = village[row][col + 1];
    if (curLocation !== undefined && curLocation != 0) {
      isKnow[row][col + 1] = 1;
    }
    // 하
    curLocation = village[row + 1][col];
    if (curLocation !== undefined && curLocation != 0) {
      isKnow[row + 1][col] = 1;
    }
    // 좌
    curLocation = village[row][col - 1];
    if (curLocation !== undefined && curLocation != 0) {
      isKnow[row][col - 1] = 1;
    }

    return isKnow;
  };
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
