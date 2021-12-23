const LPS = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = '';
  for( let i = 0; i <= Math.floor(str.length / 2); i++){
    let left = str.slice(0,i);
    let right = str.slice(str.length - i);
    if( left === right){
      result = left;
    }
  }
  return result.length;


  // const result = str.match(/^(\w*).*\1$/);
  // return result[1].length;
};

let output = LPS('abcdabbb');
console.log(output); // --> 0

output = LPS('aaaa');
console.log(output); // --> 2
// leftfix: str.slice(0, 2)
// rightfix: str.slice(2)
// non-overlapping 조건이 없는 경우 정답은 4 입니다.

output = LPS('aaaaa');
console.log(output); // --> 2
// leftfix: str.slice(0, 2)
// rightfix: str.slice(3)
// non-overlapping 조건이 없는 경우 정답은 5 입니다.
