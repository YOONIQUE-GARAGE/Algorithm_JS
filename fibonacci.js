// function fibonacci(n) {
//   // TODO: 여기에 코드를 작성합니다.
//   // num -> num
//   // 연산된 피보나치는 저장해둬서 연산됐던 넘버라면 바로 리턴 하게끔....
//   let result = [];
//   let fibo = function(n){
//     if(n === 1 || n === 0){
//       return n;
//     }
//     result[n] = (fibo(n - 1)+fibo(n - 2));
//     return result[n];
//   }
  
//   return fibo(n);
// }

function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  // num -> num
  // 연산된 피보나치는 저장해둬서 연산됐던 넘버라면 바로 리턴 하게끔....
  let result = [];
  if(n === 0 || n === 1){
    return n;
  }
  result = [0,1];
  let fibo = function(n){
    if(result[n] !== undefined){
      return result[n];
    }
    result[n] = fibo(n - 1)+fibo(n - 2);
    return result[n];
  }
  return fibo(n);
}


let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34