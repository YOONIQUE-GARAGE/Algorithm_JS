// LSC: 두 문자열에 공통으로 존재하는 연속되지 않는 부분 문자열
const LCS = function (str1, str2) {
  //TODO: 여기에 코드를 작성합니다.
  // 두 문자가를 비교해서
  // str1.slice 또는 str1.substring은 O(N)만큼의 오버헤드가 추가된다고 함
  // 비교는 인덱스만 알아도 충분!!
  // 비교하는 함수를 넣는다.
  const compareFunc = (idx1, idx2) => {
    // base case
    if (idx1 === str1.length || idx2 === str2.length) return 0;

    // 같은 문자 있을경우
    if (str1[idx1] === str2[idx2]) {
      // 공통이 있으므로 1추가해주고 재귀
      return 1 + compareFunc(idx1 + 1, idx2 + 1);
    }
    // 없을 경우
    if (str1[idx1] !== str2[idx2]) {
      // 둘 중 하나의 idx만 증가를 시키고 각각 재귀함수 돌려서 큰 수가 나온 부분을 채택
      return Math.max(compareFunc(idx1 + 1, idx2), compareFunc(idx1, idx2 + 1));
    }
  };
  return compareFunc(0, 0);
};

let output = LCS("abcd", "aceb");
console.log(output); // --> 2 ('ab' or 'ac')

output = LCS("acaykp", "capcak");
console.log(output); // --> 4 ('acak')
