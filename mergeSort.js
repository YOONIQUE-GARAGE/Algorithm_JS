const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // mergeSort는 배열을 나눠주는 역할
  // merge는 배열을 정렬해 주는 역할
  // BMR
  if (arr.length === 1) return arr;
  // 반
  let middle = Math.floor(arr.length / 2);
  // 배열을 반으로 나눈다.
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  console.log(`left: ${left} / right: ${right}`);
  // 배열을 받아 합쳐주는 함수
  const merge = function (left, right) {
    const result = [];
    // BMR
    while (left.length !== 0 && right.length !== 0) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    console.log(`mergeResult: ${[...result, ...left, ...right]}`);
    return [...result, ...left, ...right];
  };

  return merge(mergeSort(left), mergeSort(right));
};

let output = mergeSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]
