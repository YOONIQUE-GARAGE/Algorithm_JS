"use strict";
// Q)
// 내 로또번호중 알아볼수 없는 번호가 있다.
// 이를 당첨번호와 비교하여 최고 순위와 최저순위를 구하여라.
// 1등-6개일치, 2등-5개일치, 3등-4개일치, 4등-3개일치, 5등-2개일치, 6등-그외

// 수도코드
// 1. 내 로또 번호 입력받기
// 2. 당첨번호 입력받기
// 3. 함수 실행
// - 민수로또번호 입력받기
// - 로또당첨번호 입력받기
// - 최고순위 : 0의갯수 + 0이아닌 숫자중 당첨갯수의 순위
// - 최저순위 : 0이 아닌 숫자중 당첨갯수의 순위


// sol 01) 코드만 실행되도록 짜봄.
let lottos = [];
let win_nums = [];
let count = 0;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  lottos = line.split(',');
  count++;
  win_nums = line.split(',')
  count++;
  if(count >= 2){
    rl.close();
  }
});

function solution(lottos, win_nums) {
 let nzero = 0;
 for(let i = 0; i < lottos.length; i++){
  if(lottos[i] == 0){
    nzero++;
  } 
 }
  let score = 0;
  for(let i  = 0; i < lottos.length; i++){
    for(let j = 0; j < win_nums.length; j++){
      if(lottos[i] == win_nums[j]){
        score++;
      }
    }
  }
  let plus = Number(score) + Number(nzero)
  let low_rank = 0;
  let high_rank = 0;
  switch(score) {
    case 0: low_rank = 6; break;
    case 1: low_rank = 6; break;
    case 2: low_rank = 5; break;
    case 3: low_rank = 5; break;
    case 4: low_rank = 3; break;
    case 5: low_rank = 2; break;
    case 6: low_rank = 1; break;
  }
  switch(plus) {
    case 0: high_rank = 6; break;
    case 1: high_rank = 6; break;
    case 2: high_rank = 5; break;
    case 3: high_rank = 4; break;
    case 4: high_rank = 3; break;
    case 5: high_rank = 2; break;
    case 6: high_rank = 1; break;
  }
  let answer = [ high_rank, low_rank ];
  return answer;
}
console.log(solution(lottos, win_nums));

