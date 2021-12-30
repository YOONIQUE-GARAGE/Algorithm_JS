const inequalityNumber = function (signs) {
  // TODO: 여기에 코드를 작성합니다.
  // sign들을 배열로 만든다
  signs = signs.split(" ");
  console.log(signs);
  // 이미 사용한 숫자들 넣는 배열
  let used = [];
  // 부등호 왼쪽수 / 오른쪽수
  let left = [];
  let right = [];
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // '>' 가장큰수를 제일 앞에
  // '<' 가장큰수 그 다음수
  if (signs[0] === ">") {
    right.push(nums[nums.length - 1]);
    left.push(nums[nums.length - 2]);
    used.push(nums[nums.length - 1], nums[nums.length - 2]);
  }
};

let output = inequalityNumber("<");
console.log(output); // --> 88 (89 - 01)

output = inequalityNumber("< >");
console.log(output); // --> 876 (897 - 021)

output = inequalityNumber("> < >");
console.log(output); // --> 8,754 (9,786 - 1,032)
