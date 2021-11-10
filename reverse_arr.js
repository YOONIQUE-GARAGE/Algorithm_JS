function solution(n) {
  n = n + '';
  let strArr;
  strArr = (n.split("").reverse());
  let answer = [];
  for(n of strArr){
      answer.push(+n);
  }
  return answer;
}