// 1. presentation
// num, arr -> number

function orderOfPresentation (N, K) {
  // TODO: 여기에 코드를 작성합니다.
  // N: 조의수, k: 발표순서 -> 순서중요
  // N의 개숫만큼 숫자 배열 만들기 
  let nums = [];
  for(let i = 1; i <= N; i++){
    nums.push(i);
  }
  // 처음 제일 작은 수를 정하고 나머지
  let result = [];
  // result에 모든 경우의 수를 넣어주는 함수
  let combination = function(numArr, N){
    let [first, ...rest] = nums;
    result.push(first);
    console.log(result);
    if(N === 1){
      result.map((el) => [el].concat(rest));
      return result;
    }
    return combination(rest, N-1);
  }

  // return할 결과
  
    combination(nums, N);
    console.log(result);
    for(let i = 0; i < result.length; i++){
      if(result[i] === K){
        return i;
      }
    }
}

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5])
console.log(output); // 6