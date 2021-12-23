// // 방1_while_advanced조건 빼고 만족!
// const insertionSort = function (arr) {
//   // arr -> arr
//   // count !== arr.length
//   for(let i = 0; i < arr.length; i++){
//     // while문이 배열의 길이 -1 만큼 돌아가야한다.
//     let count = 1;
//     // count가 배열의 길이와 같아지면 한타임 돈걸로 생각한다.
//     while(count !==  arr.length){
//       // 뒷자리에 있는 수가 더 작을 때 자리 교환이 일어난다.
//       if(arr[count] < arr[count -1]){
//         const temp = arr[count];
//         arr[count] = arr[count -1];
//         arr[count -1 ] = temp;
//       }
//       count++;
//     }
//   }
//   return arr;
// };

// 방2. AD
const insertionSort = function (arr, callbackItem = (el) => el) {
  // TODO: 여기에 코드를 작성합니다.
  // arr -> arr
  let result = [arr[0]];
  let count = 1;
    while(count !== arr.length){
      if(callbackItem(arr[count]) >= callbackItem(result[count -1])){
        result.push(arr[count]);
      } else {
        for( let i = 0; i < count; i++){
          if(callbackItem(arr[count]) <= callbackItem(result[i])){
            const left = result.slice(0, i );
            const right = result.slice(i);
            result = left.concat(arr[count], right);
            break;
          }
        }
      }
      count++;
    }
  return result;
}

// 방2.insertionSort Advanced callback의 리턴값을 기준으로 정렬
let output = insertionSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 3, 21]