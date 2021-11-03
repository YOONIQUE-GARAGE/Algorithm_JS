// 2557
console.log("Hello World!");

// 1000
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num = [];

rl.on('line', function(line) {
  num = line.split(' ');
  
  let result = Number(num[0]) + Number(num[1]);
  console.log(result);

  rl.close();
}).on("close", function() {
  process.exit();
});

// 1008
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let num = [];
rl.on('line', function(line) {
  num = line.split(' ');
  let result = Number(num[0]) / Number(num[1]);
  console.log(result);
  rl.close();
}).on("close", function(){
  process.exit();
});

// 10869
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let num = [];
rl.on('line', function(line) {
  num = line.split(' ');
  let firstNum = Number(num[0]);
    let secondNum = Number(num[1]);
    
console.log(firstNum + secondNum);
console.log(firstNum - secondNum);
console.log(firstNum * secondNum);
console.log(Math.floor(firstNum / secondNum));
console.log(firstNum % secondNum);
  rl.close();
}).on("close", function(){
  process.exit();
});

