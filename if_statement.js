// // 1330
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// let num = [];
// rl.on('line', function(line) {
//   num = line.split(' ');
//   let firstNum = Number(num[0]);
//   let secondNum = Number(num[1]);
//   if(firstNum > secondNum){
//     console.log('>');
//   }else if(firstNum < secondNum){
//     console.log('<');
//   }else if(firstNum === secondNum){
//     console.log('==');
//   }
//     rl.close();
//   }).on("close", function(){
//     process.exit();
//   });

// // 2753
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// let year = 0;
// rl.on('line', function(line) {
//   year = line;
//   if( year % 4 === 0 && year % 100 !==0 || year % 400 === 0){
//     console.log(1);
//   }else {
//     console.log(0);
//   }
//   rl.close();
//   }).on("close", function(){
//     process.exit();
//   });

  // 2884
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let num = [];
  rl.on('line', function(line) {
    num = line.split(' ');
    let hour = Number(num[0]);
    let min = Number(num[1]);
    
    if(min > 45) {
      min -= 45;
      num[1] = min;
    } else {
      if( hour == 0 ){
        hour = 23;
      }else {
        hour --;
      }
      min = min+15;
      num[0] = hour;
      num[1] = min;
    }
    console.log(num);
    rl.close();
    }).on("close", function(){
      process.exit();
    });
  