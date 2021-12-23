// const quickSort = function (arr, callbackItem = (el) => el) {
//   // TODO: 여기에 코드를 작성합니다.
//   // 퀵정렬은 하나의 피봇을 정하고 그 숫자 기준 작은것은 왼쪽 큰 것을 오른쪽으로 정렬하는 것이다.
//   // bmr
//   if(arr.length < 2){
//     return arr;
//   }
//   const pivot = [arr[0]];
//   const left = [];
//   const right = [];
//   for(let i = 1; i < arr.length; i++){
//     if(callbackItem(arr[i]) > pivot){
//       right.push(callbackItem(arr[i]));
//     } else if(callbackItem(arr[i]) < pivot){
//       left.push(callbackItem(arr[i]));
//     }
//   }
//   const leftSort = quickSort(left, callbackItem);
//   const rightSort = quickSort(right, callbackItem)
//   return [...leftSort, ...pivot, ...rightSort];
// };

// 02. AD_callback이용
const quickSort = function (arr, callbackItem = (el) => el) {
  // TODO: 여기에 코드를 작성합니다.
  // 퀵정렬은 하나의 피봇을 정하고 그 숫자 기준 작은것은 왼쪽 큰 것을 오른쪽으로 정렬하는 것이다.
  // bmr
  if(arr.length < 2){
    return arr;
  }
  const pivot = [arr[0]];
  const left = [];
  const right = [];
  for(let i = 1; i < arr.length; i++){
    if(callbackItem(arr[i]) > callbackItem(...pivot)){
      right.push(arr[i]);
    } else if(callbackItem(arr[i]) <= callbackItem(...pivot)){
      left.push(arr[i]);
    }
  }
  return [...quickSort(left, callbackItem), ...pivot, ...quickSort(right, callbackItem)];
};


let output = quickSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]