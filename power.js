function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  if (exponent === 0) {
    return 1;
  }
  const half = parseInt(exponent / 2);
  //재귀에 들어갈때 인자값을, 밑변은 그대로 다시 들어가고, 제곱을 2로나눈 값으로 넣어줌
  const temp = power(base, half);
  // %연산에 의해서 (temp * temp)의 나머지를 구하더라도 9406249보다 작으면 다시 (temp * temp)가 출력.
  const result = (temp * temp) % 94906249;
  //2로 항상 나누고 소수점을 띠어버리기 때문에 나머지가 1이 계속나온다.
  if (exponent % 2 === 1) {
    // 밑을 (temp * temp) % 94906249;의 결과로 곱 해준다.
    // power()의 return이 된다는 것.
    // 다시 temp의 return이 전달되고 반복 된다.
    return (base * result) % 94906249;
  } else {
    return result;
  }
}

let output = power(2, 10);
console.log(output); // --> 1024
