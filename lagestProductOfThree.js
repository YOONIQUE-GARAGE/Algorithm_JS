// arr -> number

const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 3개를 뽑아서 곱셈한걸 배열에 큰 수부터 정렬해서 그 중 0번째꺼 리턴
  const sortedArr = arr.slice("").sort((a, b) => a - b);
  const arrLeng = arr.length;
  console.log(sortedArr);
  // 정렬했기때문에 뒤부터 3개의 곱이 가장 크거나 앞에서 두개(음수의 경우) * 뒤에서 한개
  const right =
    sortedArr[arrLeng - 1] * sortedArr[arrLeng - 2] * sortedArr[arrLeng - 3];
  const left = sortedArr[arrLeng - 1] * sortedArr[0] * sortedArr[1];

  return Math.max(right, left);
};

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
