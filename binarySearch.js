// arr, target -> indexOf(target)

// 방1. 시간초과
// const binarySearch = function (arr, target) {
//   // TODO : 여기에 코드를 작성합니다.
//   let lowest = 0;
//   let highest = arr.length - 1;
//   let middle; 
//   while(lowest <= highest){
//     middle = Math.floor((lowest + highest) / 2);
//     if(arr[middle] > target){
//       highest--;
//     }else if(arr[middle] < target){
//       lowest++;
//     }else if(target === arr[middle]){
//       return middle;
//     }
//   }
//   return -1;
// }

// 방2.시간초과
// const binarySearch = function (arr, target) {
//   let lowest = 0;
//   let highest = arr.length - 1;
//   let middle = Math.floor((lowest + highest) / 2); 
//   while(arr[middle] !== target){
//     if(arr[middle] > target){
//       middle--;
//     }else if(arr[middle] < target){
//       middle++;
//     }else {
//       return -1;
//     }
//   }
//   return middle;
// }

// 방3. 재귀
const binarySearch = function (arr, target) {
  const middle = Math.floor((arr.length - 1) / 2);
  const index = middle + 1;
  console.log(`target: ${target} / arr: ${arr}/ middle: ${middle}`);
  // bareMinimun
  if(target === undefined || target > arr[arr.length - 1] || target < arr[0]){
    return -1;
  }
  const arrV = arr;
  const bs = (arr) => {
    if(target === arr[middle]){
      return arrV.indexOf(target);
    }else if( target > arr[middle]){
      return binarySearch(arr.slice((index)), target)
    }else if( target < arr[middle]){
      return binarySearch(arr.slice(0, middle), target)
    }
  }
  return bs(arr, target);
}


let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2

output = binarySearch([4, 5, 6, 9], 100);
console.log(output); // --> -1

output = binarySearch([3, 6, 7, 8, 9, 21, 31, 32], 25);
console.log(output);

