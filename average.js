function solution(arr) {
  let total = 0; 
  for(let num of arr){
      total += num;
  }
  let answer = total / arr.length;
  return answer;
}