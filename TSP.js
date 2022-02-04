// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
  const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
  const dist = Math.sqrt(yDiffSquared + xDiffSquared);
  return Math.floor(dist * 100);
}

// 완전탐색 알고리즘 이용(ExhaustiveSearch)
// 모든 경우의 수를 타 체크해서 정답을 찾는 방법 -> 가능한거 다 해보겠다는 방법
// 완전탐색종류: 브루트 포스, 비트 마스크, 백트래킹, 재귀함수, 순열, BFS, DFS

// Q. 모든 도시를 빠짐 없이 한 번씩 방문하는 경로 중 최단거리 리턴
// 시작점으로부터 생길 수 있는 모든 경로 구하기
const TSP = function (places) {
  // TODO: 여기에 코드를 작성합니다.
  // 만약 4개지점이라면 모든 경우의 수는 4 * 3 * 2 * 1 = 24가지
  const leng = places.length;
  const getPermutations = function (arr, leng) {
    const result = [];
    if (leng === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
      // 한개고정, 이후 나머지
      const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
      // fix이후 나머지 배열
      const permutations = getPermutations(rest, leng - 1);
      // 나머지 순열 fixed값 붙이기
      const attached = permutations.map((el) => [fixed, ...el]);
      result.push(...attached);
    });
    return result;
  };
  let disTotal = [];
  const result = getPermutations(places, leng);
  for (let i = 0; i < result.length; i++) {
    // result의 배열을 순서대로 가져와서 그 안에 배열을 또 보내함
    let total = 0;
    for (let j = 0; j < result[i].length - 1; j++) {
      total += calculateDistance(result[i][j], result[i][j + 1]);
    }
    if (disTotal.find((el) => el === total) === undefined) disTotal.push(total);
  }

  return disTotal.sort(function (a, b) {
    return a - b;
  })[0];
};

let placesToVisit = [
  [0, 0],
  [1, 1],
  [1, 3],
  [2, 2],
];
let output = TSP(placesToVisit);
console.log(output); // --> 423
// 방문 순서: [0, 0], [1, 1], [2, 2], [1, 3]

placesToVisit = [
  [0, 0],
  [3, 3],
  [-3, 3],
  [2, 3],
  [1, 3],
];
output = TSP(placesToVisit);
console.log(output); // --> 940
// 방문 순서: [-3, 3], [1, 3], [2, 3], [3, 3], [0, 0]
