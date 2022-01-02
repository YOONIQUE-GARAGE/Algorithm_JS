const inequalityNumber = function (signs) {
  // TODO: 여기에 코드를 작성합니다.
  // 최대 부등호수
  const getMaxNumber = (signs, nums) => {
    let max = "";
    for (let i = 0; i < signs.length; i++) {
      // '>'이면, 맨뒤에꺼 꺼내서 max에 담기
      if (signs[i] === ">") {
        max += String(nums.pop());
      } else {
        // 다음 부등호를 위해 카운트 세기
        let count = 1;
        for (let j = i + 1; j < signs.length; j++) {
          if (signs[j] === "<") count++;
          else break;
        }
        max += String(nums.splice(nums.length - 1 - count, 1));
      }
    }
    max += nums.pop();
    return max;
  };

  // 최소부등호수
  const getMinNumber = (signs, nums) => {
    let min = "";
    for (let i = 0; i < signs.length; i++) {
      // '<'이면 제일작은 수 가져오기
      if (signs[i] === "<") {
        min += String(nums.shift());
      } else {
        let count = 1;
        for (let j = i + 1; j < signs.length; j++) {
          if (signs[j] === ">") count++;
          else break;
        }
        min += String(nums.splice(count, 1));
      }
    }
    min += nums.shift();
    return min;
  };

  // 최대부등호수 - 최소부등호수
  const inequalityNumber = function (signs) {
    signs = signs.split(" ");
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // 최대 - 최소
    const answer =
      getMaxNumber(signs, number.slice()) - getMinNumber(signs, number.slice());
    return answer;
  };
};

let output = inequalityNumber("<");
console.log(output); // --> 88 (89 - 01)

output = inequalityNumber("< >");
console.log(output); // --> 876 (897 - 021)

output = inequalityNumber("> < >");
console.log(output); // --> 8,754 (9,786 - 1,032)
