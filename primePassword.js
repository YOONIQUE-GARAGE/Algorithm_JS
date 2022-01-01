// 소수 판별함수
const isPrime = (num) => {
  // 소수는 2로 나눠지면 안된다.
  if (num % 2 !== 1) return false;
  // 소수는 3~(자기자신 -1)까지 약분되면 안된다.
  // 소수 여부를 검사할 수에 대해서 그 값의 제곱근을 기준으로 그 곱은 대칭적으로 곱이 일어나므로
  // 제곱근 이하의 작은 값까지만 검사를 하면 나머지는 검사를 할 필요가 없다
  let sqrt = parseInt(Math.sqrt(num));
  for (let i = 3; i <= sqrt; i += 2) {
    // 나눴을 때 나눈수가 아니고 다른수가 나오면 나누어진 것으로 소수가 아니라 판단.
    if (num / i !== i) return false;
  }
  // 모든 false조건을 빠져나오면 true반환
  return true;
};

const primePassword = (curPwd, newPwd) => {
  // TODO: 여기에 코드를 작성합니다.
  // 소수는 약수가 1과 자기자신뿐
  // 소수는 홀수이면서 2 ~ (curPwd - 1)까지 약분이 되면 안된다.

  // 문제요점은 비밀번호를 변경시에 계속 소수를 유지해야 한다는 거!!
  // 현재 비밀번호에서 마지막자리 수부터 숫자 변경해서 소수유지 가능한 숫자 찾기
  // 없으면 변경하지 말고 다음 자릿수로 이 때, 변경횟수 count해주는건 그대로유지
  // 있으면 count++하고 다음자리에서 같은 로직 반복
  // let count = 3;
  // let time = 3;
  // 각 자리수 순서대로 가져오기
  // const arr = curPwd.split();
  // 가져온 수에 여러숫자 대입하다 소수 유지하는 숫자 있으면 빠져나오고 다음 자리수로

  return count;
};

let output = primePassword(1033, 1033);
console.log(output); // --> 0

output = primePassword(3733, 8779);
console.log(output); // --> 3 (3733 -> 3739 -> 3779 -> 8779)
