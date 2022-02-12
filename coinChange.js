const coinChange = function (total, coins) {
  // memo 2차원 배열 만들기
  const memo = [];
  for (let i = 0; i < total + 1; i++) memo.push(Array(coins.length).fill(-1));
  const makeTotal = (left, idx) => {
    // base
    if (left === 0) return 1;
    if (left < 0) return 0;
    // 나머지 경우
    // 동전으로 total 만들지 못한 경우
    if (idx >= coins.length && left > 0) return 0;
    // 이미 해결한 문제 재풀이 안함
    if (memo[left][idx] !== -1) return memo[left][idx];

    // 결국 total를 구할 수 있는 경우는
    // idx를 바로바로 증가시켜서냐 아니면 idx를 계속 사용하면서 total을 만들어감
    // console.log(makeTotal(left, idx + 1));
    // console.log(makeTotal(left - coins[idx], idx));
    memo[left][idx] =
      makeTotal(left, idx + 1) + makeTotal(left - coins[idx], idx);
    return memo[left][idx];
  };
  return makeTotal(total, 0);
};

let total = 10;
let coins = [1, 5];
let output = coinChange(total, coins);
console.log(output); // --> 3

total = 4;
coins = [1, 2, 3];
output = coinChange(total, coins);
console.log(output); // --> 4 ([1, 1, 1, 1], [1, 1, 2], [2, 2], [1, 3])
