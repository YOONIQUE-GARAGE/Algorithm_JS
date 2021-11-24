// 15. modulo
// num1, num2 -> number
// num1 === 0, num2 === 0

function modulo(num1, num2) {
  if(num1 === 0 || num1 === num2){
    return 0;
  }else if( num2 === 0) {
    return 'Error: cannot divide by zero';
  }
  while(num1 > num2){
    num1 = num1 - num2;
  }
  return num1;
}

let output = modulo(25, 4);
console.log(output); // --> 1

