// 1330
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
  if(firstNum > secondNum){
    console.log('>');
  }else if(firstNum < secondNum){
    console.log('<');
  }else if(firstNum === secondNum){
    console.log('==');
  }
    rl.close();
  }).on("close", function(){
    process.exit();
  });

// 2753
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let year = 0;
rl.on('line', function(line) {
  year = line;
  if( year % 4 === 0 && year % 100 !==0 || year % 400 === 0){
    console.log(1);
  }else {
    console.log(0);
  }
  rl.close();
  }).on("close", function(){
    process.exit();
  });
