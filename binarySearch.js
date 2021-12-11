// arr, target -> indexOf(target)

const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let lowest = 0;
  let highest = arr.length - 1;
  let middle; 
  while(lowest <= highest){
    middle = Math.floor((lowest + highest) / 2);
    if(arr[middle] > target){
      highest = middle - 1;
    }else if(arr[middle] < target){
      lowest = middle + 1;
    }else if(target === arr[middle]){
      return middle;
    }
  }
  return -1;
}

let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2

output = binarySearch([4, 5, 6, 9], 100);
console.log(output); // --> -1

output = binarySearch([3, 6, 7, 8, 9, 21, 31, 32], 25);
console.log(output); // --> -1

