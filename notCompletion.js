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

// 02.
function solution(participant, completion) {
  // 두 배열 정렬 후 if문 값이 다르면 바로 리턴
  // 이게 가능한 이유? -> participant가 completion보다 1더 길기때문
  participant.sort();
  completion.sort();
  // 성능향상 -> length 구하는 부분 변수로 만들어 사용하기
  const leng = participant.length;
  for (let i = 0; i < leng; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
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
