function solution(absolutes, signs) {
  let count = 0;
  let total = 0;
  let result = absolutes.reduce((acc, cur, str) => {
    if (signs[count] === false) {
      cur = -cur;
    }
    console.log(`acc: ${acc}, cur: ${cur}`);
    total = acc + cur;
    count++;
    return total;
  }, 0);
  return result;
}

let result = solution([4, 7, 12], [true, false, true]);
console.log(result); // 9

result = solution([1, 2, 3], [false, false, true]);
console.log(result); // 0
