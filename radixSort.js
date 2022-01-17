function radixSort(arr) {
  // todo: 여기에 코드를 작성합니다.
  // 계수정렬: 누적합이 index가 되는 정렬
  // 기수정렬: 자리수를 비교해서 정렬하는 방식
  //        1의자리기준으로정렬 -> 10의자리기준으로정렬 -> ... 반복
  // 1. 배열의 최대값 찾기
  // 2. countSort를 통해 작은 자리수부터 정렬
  // 3. 최대값의 자리수만큼 돌아야하므로 재귀함수사용
  // // 최대값 구하는 함수
  // const max = function (arr) {

  //   let result = arr[0];
  //   for (i = 1; i < arr.length; i++) {
  //     if (arr[0] < arr[i]) {
  //       result = arr[i];
  //     }
  //   }
  //   return result;
  // };

  // 현재 정렬중인 자리수(*10) 나타낼 줄 변수
  let position = 10;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // 1의 자리는 10으로 나눈 나머지
    let first = arr[i] % position;
  }
}

let output = radixSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
