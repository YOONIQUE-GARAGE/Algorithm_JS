// 01. some testcase fail And Speed fail
//function solution(participant, completion) {
//  for (let com of completion) {
//    for (let i = 0; i < participant.length; i++) {
//      if (com === participant[i]) {
//        participant.splice(i, 1);
//      }
//    }
//  }
//  return `${participant}`;
//}

// 02. sort()이용
//function solution(participant, completion) {
//  // 두 배열 정렬 후 if문 값이 다르면 바로 리턴
//  // 이게 가능한 이유? -> participant가 completion보다 1더 길기때문
//  participant.sort();
//  completion.sort();
//  // 성능향상 -> length 구하는 부분 변수로 만들어 사용하기
//  const leng = participant.length;
//  for (let i = 0; i < leng; i++) {
//    if (participant[i] !== completion[i]) {
//      return participant[i];
//    }
//  }
//}

// 03. map이용
function solution(participant, completion) {
  const map = new Map();
  const leng = participant.length;
  // map에 키 밸류 형태로 set해주기
  for (let i = 0; i < leng; i++) {
    let p = participant[i],
      c = completion[i];
    // set,get 이용해서 더해주고 빼주기
    map.set(p, (map.get(p) || 0) + 1);
    map.set(c, (map.get(c) || 0) - 1);
  }
  // value값이 0이 아닌 것들 리턴. -> 완주하지 못한 선수
  for (let [k, v] of map) {
    if (v > 0) return k;
  }
}

let result = solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
console.log(result);

result = solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);
console.log(result);

result = solution(
  ["mislav", "stanko", "mislav", "ana"],
  ["stanko", "ana", "mislav"]
);
console.log(result);
