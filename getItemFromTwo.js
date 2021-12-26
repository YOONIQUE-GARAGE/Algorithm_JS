const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.
  // 중복o
  let left = 0;
  let right = 0;
  let count = 0;
  let result;
  while (count < k) {
    if (arr1[left] < arr2[right]) {
      result = arr1[left];
      left++;
    } else {
      result = arr2[right];
      right++;
    }
    count++;
  }
  return result;
};

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3
