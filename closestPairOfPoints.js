// 좌표평면위 두 점 사이의 거리
function calculateDistance(p1, p2) {
  const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
  const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
  const dist = Math.sqrt(yDiffSquared + xDiffSquared);
  return Math.round(dist * 100);
}

const closestPairOfPoints = function (points) {
  // MAX_SAFE_INTEGER는 Javascript에서 안전한 최대 정수 값을 나타내는데
  // 최소값에 들어올 수 있는 가장 큰 값을 넣으므로써 정수를 정확하고 올바르게 비교할 수 있게 해준다.
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distance = calculateDistance(points[i], points[j]);
      // 재귀함수로 돌려서 제일 작은 값 찾아내 리턴
      min = Math.min(min, distance);
    }
  }
  return min;
};

let points = [
  [0, 0],
  [1, 3],
  [2, 2],
];
let output = closestPairOfPoints(points);
console.log(output); // --> 141 ([1, 3], [2, 2])
/*
3 |  x
2 |     x
1 |       
0 | x 
------------
    0 1 2 3 
*/

points = [
  [0, 0],
  [0, 1],
  [0, 3],
  [0, 5],
];
output = closestPairOfPoints(points);
console.log(output); // --> 100 ([0, 0], [0, 1])
/*
5 | x
4 | 
3 | x
2 |     
1 | x     
0 | x 
------------
    0 1 2 3 
*/
