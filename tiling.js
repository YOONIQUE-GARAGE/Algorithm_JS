let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  // 2 * 1 타일
  // 가로로 배치한 타일들의 경우의 수  = 전체 경우의 수
  // 순서 상관 없음! 조합 nCr
  // 2 * n 에서 가로로 놓일 수 있는 경우의 수
  // nCr의 r=Math.floor(n / 2)까지 nCo + n-1C1 + ... n-n-1Cr

  const factorial = function (num) {
    if (num === 1 || num === 0) {
      return 1;
    }
    return num * factorial(num - 1);
  };
  let result = 0;
  let r = Math.floor(n / 2);
  for (let i = 0; i <= r; i++) {
    if (n < r) {
      return;
    }
    //console.log(`n: ${n} / i: ${i}`);
    result += factorial(n) / (factorial(i) * factorial(n - i));
    //console.log(result);
    n = n - 1;
  }
  return result;
};

let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5
