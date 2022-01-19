// O(N)
// 매번 나눗셈을 하는 것은 비효율적
const uglyNumbers = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  // 1,2,3,4,5,6,8,9,10,12,15,16.....

  const uglyNumbers = [1];
  // 각각 배수의 idx를 만들어 준다.
  let idx2 = 0,
    idx3 = 0,
    idx5 = 0;

  // hint: ugly number에 2,3 또는 5를 곱한 수 역시 ugly number 이다.
  for (let i = 0; i < n; i++) {
    const ugly2 = uglyNumbers[idx2] * 2;
    const ugly3 = uglyNumbers[idx3] * 3;
    const ugly5 = uglyNumbers[idx5] * 5;
    // 첫판 돌았을 때, 제일 작은 수 찾기
    const nextUglyNum = Math.min(ugly2, ugly3, ugly5);
    // 배열에 넣기
    uglyNumbers.push(nextUglyNum);

    // 해당 idx만 증가시켜주기
    // 그래야 모든 ugly num을 구할 수 있다.
    if (nextUglyNum === ugly2) idx2++;
    if (nextUglyNum === ugly3) idx3++;
    if (nextUglyNum === ugly5) idx5++;
  }
  return uglyNumbers[n - 1];
};

let result = uglyNumbers(1);
console.log(result); // --> 1

result = uglyNumbers(3);
console.log(result); // --> 3
