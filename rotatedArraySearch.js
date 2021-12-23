// 01. 
const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  // 정수배열, target -> target의 인덱스
  let lowest = 0;
  let highest = rotated.length - 1;
  let middle; 
  while(lowest <= highest){
    middle = Math.floor((lowest + highest) / 2);
    if(target === rotated[middle]){
      return middle;
    }

    if(rotated[lowest] < rotated[middle]){
      if(target < rotated[middle] && target >= rotated[lowest]){
        highest = middle - 1;
      }else {
        lowest = middle + 1;
      }
    } else {
      if(target <= rotated[highest] && target > rotated[middle]){
        lowest = middle + 1;
      }else {
        highest = middle - 1;
      }
    }
  }
  return -1;
};


let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([9, 10, 15, 4, 6, 8], 6);
console.log(output); // --> 4