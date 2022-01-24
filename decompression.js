const decompression = function (image) {
  // TODO: 여기에 코드를 작성합니다.
  // 4등분씩 재귀적 분할해서 1, 0, x 반환
  // 먼저 image 그 자체 -> x
  // 그 다음 4등분
  // 4등북을 어떻게 할 수 있을까?
  // Math.floor((image.length - 1) / 2) > 0까지 4등분하기
  // 맨 처음은 image배열 그대로
  let quarter = image.length - 1;
  // 4등분 후 검사 왼위, 오위, 왼아래, 오아래 순서
  // 4등분한 배열 원소 검사하는 부분 필요
  const zeroOrOne = (image) => {
    // 4등분 했을 때, 원소가 하나이면
    if (image.length === 1) return image[0][0];
    // 4등분 했을 때, 원소가 2개이상이면
    let zero = 0;
    let one = 0;
    for (let i = 0; i < image.length; i++) {
      for (let j = 0; j < image[0].length; j++) {
        if (image[i][j] === 1) {
          one++;
        } else if (image[i][j] === 0) {
          zero++;
        }
      }
    }
    if (zero === image.length * image[0].length) {
      return 0;
    } else if (one === image.length * image[0].length) {
      return 1;
    } else {
      return "X";
    }
  };
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
