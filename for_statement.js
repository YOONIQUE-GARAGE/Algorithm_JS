// 2739
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let n;
rl.on('line', function(line) {
  n  = line;
  
  for(let i = 1; i< 10; i++){
    console.log(`${n} * ${i} = ${n * i}`);
  }

  rl.close();
  }).on("close", function(){
    process.exit();
  });

// 15552
// sol_01) fs이용.
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let range = Number(input[0]);
let result = '';
for(let i = 1; i <= range; i++){
  let num = input[i].split(' ');
  result += Number(num[0]) + Number(num[1]) + '\n';
}
console.log(result);
// sol_02) readline이용.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const numArr = [];
rl.on('line', function(line) {
  numArr.push(line);
}).on("close", function(){
    let range = Number(numArr[0]);
    for(let i = 1; i <= range; i++){
    let num1 = Number(numArr[i].split(' ')[0]);
    let num2 = Number(numArr[i].split(' ')[1]);

    console.log(num1 + num2);
  }
  process.exit();
});





