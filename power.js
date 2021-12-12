function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  if(exponent === 0){
    return 1;
  }
  return ((base % 94906249) * (power(base, exponent - 1))) % 94906249;

}

let output = power(2, 10);
console.log(output); // --> 1024