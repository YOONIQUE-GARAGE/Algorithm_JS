const boardGame = function foo(board, str) {
  const arr = str.split("");
  let x = 0;
  let y = 0;
  let myLocation = board[y][x];
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "R":
        if (x === board[0].length - 1) {
          myLocation = 0;
        } else {
          x += 1;
          myLocation = board[y][x];
          board[y][x] = 0;
        }
        break;
      case "L":
        if (x === 0) {
          myLocation = 0;
        } else {
          x -= 1;
          myLocation = board[y][x];
          board[y][x] = 0;
        }
        break;
      case "U":
        console.log(`U: ${myLocation}`);
        if (y === 0) {
          myLocation = 0;
        } else {
          y -= 1;
          myLocation = board[y][x];
          board[y][x] = 0;
        }
        break;
      case "D":
        if (y === board.length - 1) {
          myLocation = 0;
        } else {
          y += 1;
          myLocation = board[y][x];
          board[y][x] = 0;
        }
        break;
    }
    result += myLocation;
  }
  return result;
};

const board1 = [
  [999, 999, 999],
  [999, 999, 999],
  [999, 999, 999],
];
const output1 = boardGame(board1, "UUUUDUDUDUDUDUD");
console.log(output1); // 1998

const board2 = [
  [567, 6734, 132],
  [789, 243, 6],
  [89, 33333, 0],
];
const output2 = boardGame(board2, "UUUDD");
console.log(output2); // 878

const board3 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];
const output3 = boardGame(board3, "DDRRRUDUDUD");
console.log(output3); // 0

const board4 = [
  [72, 0, 80, 1],
  [1, 9, 11, 10],
  [1, 1, 792, 0],
  [13, 44, 27, 0],
];
const output4 = boardGame(board4, "RRDLLD");
console.log(output4); // 102

const board5 = [
  [111, 0, 1],
  [99, 1, 1],
  [1, 0, 0],
];

const output5 = boardGame(board5, "U");
console.log(output5); // 0
