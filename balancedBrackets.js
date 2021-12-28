// () 하나의 조건 만족
// const balancedBrackets = function (str) {
//   // TODO: 여기에 코드를 작성합니다.
//   // BMR
//   if (str.length === 0) {
//     return true;
//   } else if (str.length === 1 || str[0] === ")") {
//     return false;
//   }
//   // ()만생각하기
//   // ( 갯수만큼 )가 있어야함
//   const right = [];
//   const left = [];

//   const arr = str.split("");

//   for (let el of arr) {
//     console.log(`el: ${el}`);
//     if (String(el) === "(") {
//       right.push(el);
//     } else if (String(el) === ")") {
//       left.push(el);
//     }
//   }
//   console.log(`${right.length} / ${left.length}`);
//   // 두 짝의 갯수비교
//   if (right.length !== left.length) {
//     return false;
//   } else {
//     // 만약 갯수가 맞으면 여기서 arr에서 짝지어지는거 빼고 다시 확인(재귀)
//     for (let i = 0; i < arr.length; i++) {}
//   }
//   return true;
// };

// 2.
const balancedBrackets = function (str) {
  let result = [];
  // 키 밸류 형태로 짝을 찾아주기 위해 객체에 담아주기
  const left = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  // 단순 비교를 위한 문자열
  const right = "}])";
  for (let i = 0; i < str.length; i++) {
    if (str[i] in left) {
      result.push(str[i]);
    } else if (right.includes(str[i])) {
      // 닫는 부호 들어왔을때 먼저 넣은 값 꺼내서
      const top = result.pop();
      // 그 값의 밸류가 닫는 부호와 일치하는지 확인 일치하면 for문 다 돌때까지 넘어가기, 일치하지 않으면 false
      const pair = left[top];
      if (pair !== str[i]) {
        return false;
      }
    }
  }
  console.log(result.length === 0);
  // 짝을 맞춰 pop했는데에도 result가 남아있으면 짝이 안맞는 것이므로 false;
  // result.length === 0이면 모든 짝이 맞는 것이므로 true;
  return result.length === 0;
};

let output = balancedBrackets("(");
console.log(output); // // -> false

output = balancedBrackets("()");
console.log(output); // --> true

// let output = balancedBrackets('[](){}');
// console.log(output); // --> true

// output = balancedBrackets('[({})]');
// console.log(output); // --> true

// let output3 = balancedBrackets('[(]{)}');
// console.log(output); // --> false
