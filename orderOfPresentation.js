function orderOfPresentation(N, K) {
  // 조의 개수 N, 발표 순서 K
  // 조별 발표 순서는 순서가 있는 순열이다.
  // factorial이용
  const factorial = function (n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  // 발표순서 담기
  let result = 0;

  // 활용된 경우의 수 파악. 첫 번째는 더미데이터
  const used = Array(N + 1).fill(false);

  for (let i = 0; i < K.length; i++) {
    // K의 i번째 조를 변수에 담기
    const num = K[i];
    // 사용했는지 판별하는 배열에 담기
    used[num] = true;
    // num보다 앞에 올 수 있는 수들의 배열을 복제해서, 이 중 사용되지 않은 갯수 구함
    const left = used.slice(1, num);
    const unused = left.filter((el) => el === false).length;
    // 아직 사용되지 않은 수 전까지 모든수 카운트
    const unusedCount = unused * factorial(N - i - 1);

    result += unusedCount;
  }
  return result;
}

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5]);
console.log(output); // 6
