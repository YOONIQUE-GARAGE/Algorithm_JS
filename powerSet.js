// str -> arr(모든 부분집합)
const powerSet = function (str) {
  // 먼저 축소해서 생각하기
  // str = 1일경우,
  // const checked = new Array(arr.length).fill(false);
  // 1이 선택될 경우/ 아닌경우
  // if()
  // 정렬하고 중복 제거한 arr 만들기!!
  // dfs이용!!
  const sortedArr = Array.from(new Set(str.split("")));

  let result = [];
  const dfs = (arr, depth) => {
    if (depth === sortedArr.length) {
      result.push(arr.slice().sort().join(""));
      return;
    } else {
      arr[depth] = sortedArr[depth];
      dfs(arr, depth + 1);
      arr[depth] = undefined;
      dfs(arr, depth + 1);
    }
  };
  dfs([], 0);
  return result.sort();
};

let output1 = powerSet("abc");
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet("jjump");
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
