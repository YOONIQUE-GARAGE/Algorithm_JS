const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 각각의 원소를 하나의 배열로 취급
  const newArr = arr.map((el) => [el]);
  console.log(newArr);
  let result = '';
  //인접한 2개 병합
  let count = 1;
  console.log(Math.round(newArr.length / 2));
  while(count < Math.round(newArr.length / 2)){
    console.log(`count-1: ${newArr[count]}`);
    if(newArr[count -1 ] > newArr [count]){
      result = [...newArr[count], ...newArr[count - 1]]
    }
    console.log(result);
    count = count + 2;
  }
  if(newArr[count - 1] !== undefined){
    result = [...result, ...newArr[count -1 ]];
  }
  console.log(result);
  return result;
};


let output = mergeSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]