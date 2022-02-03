const decompression = function (image) {
  // TODO: 여기에 코드를 작성합니다.
  // 4등분씩 재귀적 분할해서 1, 0, x 반환
  // 먼저 image 그 자체 -> x
  // 그 다음 4등분
  // 4등북을 어떻게 할 수 있을까?
  // Math.floor((image.length - 1) / 2) > 0까지 4등분하기
  // 맨 처음은 image배열 그대로
  // 필요한 요소는 y축 시작끝, x축 시작끝, y축 중간, x축 중간 총 6개
  // y: row, x: col
  // 4등분 한것을 반복할 재귀함수 필요
  const quaterEl = (sY, eY, sX, eX, image) => {
    // base
    if (sY === eY) return `${image[sY][sX]}`;

    const yMid = Math.floor((sY + eY) / 2);
    const xMid = Math.floor((sX + eX) / 2);
    const upLeft = quaterEl(sY, yMid, sX, xMid, image);
    const upRight = quaterEl(sY, yMid, xMid + 1, eX, image);
    const downLeft = quaterEl(yMid + 1, eY, sX, xMid, image);
    const downRight = quaterEl(yMid + 1, eY, xMid + 1, eX, image);
    // let count = 1;
    //console.log(
    //  `count: ${count} / upLeft: ${upLeft} / upRight: ${upRight} / downLeft: ${downLeft} / downRight: ${downRight}`
    //);
    // count++;
    const result = upLeft + upRight + downLeft + downRight;

    if (result === "1111") return "1";
    else if (result === "0000") return "0";
    else return "X" + result;
  };
  return quaterEl(0, image.length - 1, 0, image[0].length - 1, image);
};

let image = [
  [1, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 0, 0],
];
let result = decompression(image);
console.log(result); // --> 'XX100110X1100​'

image = [
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
];
result = decompression(image);
console.log(result); // --> 'X0X101X10101X00X10011'
