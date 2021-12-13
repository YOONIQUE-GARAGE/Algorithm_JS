로직ok, 실행초과
const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 원소를 비교해 크면 자리바꾸기 그걸 arr.length -1 만큼 반복
  let tempArr = [...arr];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(`arr[i]:${arr[j]} / arr[j]: ${arr[j + 1]}`);
        let moveNum = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = moveNum;
        console.log(`arr: ${arr}`);
      }
      console.log(`arr: ${arr} / tempArr: ${tempArr}`);
    }
    if (tempArr === arr) {
      return arr;
    }
  }
  return arr;
};

// const bubbleSort = function (arr) {
//   let changed = false;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let moveNum = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = moveNum;
//       changed = true;
//     }
//   }
//   return changed ? bubbleSort(arr) : arr;
// };

// let output = bubbleSort([5, 4, 3, 2, 1]);
// console.log(output); // --> [1, 2, 3]
