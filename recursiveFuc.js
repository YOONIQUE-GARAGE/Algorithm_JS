// 01. sumTo
// bareScale:num === 0
// num => num
function sumTo(num){
  if(num === 0 || num === 1){
    return num;
  }
  return num + sumTo(num-1);
}


let output = sumTo(10);
console.log(output); // --> 55

// 02. isOdd 
// num => boolean
// bareScale num === 0 이거나 num === 1일때!!
function isOdd(num){
  
  if(num === 1){
    return true;
  }else if(num === 0){
    return false;
  }

  return isOdd(num -2);
}

let output = isOdd(10);
console.log(output);

output = isOdd(15);
console.log(output);

// 03. factorial
// bareScale: 0! === 1 , 1! === 1
// num => num
function factorial(num){
  if( num === 0 || num === 1 ){
    return num;
  }
  return num * factorial(num - 1);
}

let output = factorial(10);
console.log(output);

// 04. fibonacci
// number => number
// bareScale: num === 0, num === 1 
function fibonacci(num) {
  if( num === 0 || num === 1){
    return num;
  }
  return fibonacci(num - 2) + fibonacci(num -1);
}

let output = fibonacci(5);
console.log(output); // 5

output = fibonacci(9);
console.log(output); // 34

// 05. arrSum
// arr -> number
// bareScale: arr.length === 0;
function arrSum(arr){
  if(arr.length === 0){
    return 0;
  }
  const [head, ...tail] = arr;
  console.log(arr);
  return head + arrSum(tail);
}

let output = arrSum([-1, -2, 1, 3]);
console.log(output);

// 06. take
// num, arr => arr
// bareScale: num === 0 || arr.length === 0;

function take(num, arr){
  if(num === 0 || arr.length === 0) return [];
  const head = [arr[0]];
  return head.concat(take(Number(num -1) , arr.slice(1)));
}

let output = take(2, [1, -2, 1, 3]);
console.log(output);
output= take(5, [1, -2, 1, 3]);
console.log(output);