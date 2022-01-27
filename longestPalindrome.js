// study
// O((N^2))
let longestPalindrome = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  // bare require
  if (str.length < 2) return str.length;

  const leng = str.length;
  // 2차원배열을 만드는 것으로 글자 갯수만큼의 배열을 각 배열당 글자갯수만큼 생성
  const isPalindrome = Array(leng)
    .fill(false)
    .map((_) => Array(leng).fill(false));
  console.log(isPalindrome);

  // 반환할 최대 길이
  let maxLeng = 1;
  // 길이가 1인
  for (let i = 0; i < leng; i++) isPalindrome[i][i] = true;
  console.log(isPalindrome);
  // 갈이가 2인
  for (let i = 0; i < leng - 1; i++) {
    if (str[i] === str[i + 1]) {
      isPalindrome[i][i + 1] = true;
      maxLeng = 2;
    }
  }
  console.log(isPalindrome);
  // 길이가 3인
  for (let i = 3; i <= leng; i++) {
    for (let startIdx = 0; startIdx <= leng - i; startIdx++) {
      const endIdx = startIdx + i - 1;
      if (
        isPalindrome[startIdx + 1][endIdx - 1] === true &&
        str[startIdx] === str[endIdx]
      ) {
        isPalindrome[startIdx][endIdx] = true;
        maxLeng = leng;
      }
    }
  }
  return maxLeng;
};

str = " dad ";
result = longestPalindrome(str);
console.log(result); // --> 5 (' dad ')
