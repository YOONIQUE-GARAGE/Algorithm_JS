// 구간트리(Segment Tree)
// 배열의 구간정보를 담고 있는 트리
// 0(logN)의 시간복잡도

const rangeMinimum = function (arr, ranges) {
  // TODO: 여기에 코드를 작성합니다.
  // ranges의 범위들에 있는 최소값을 배열에 넣어 배열 반환하기
  // arr 을 segmentTree로 만들어주는 함수구현
  const makeSegArr = function (arr, start, end) {
    // start : 0, end : arr.length - 1
    // base case
    if (start === end) {
      return { value: arr[start] };
    }
    // 중간을 정해서 양쪽으로 분기해주기
    const mid = Math.floor((start + end) / 2);
    const left = makeSegArr(arr, start, mid);
    const right = makeSegArr(arr, mid + 1, end);

    return {
      value: Math.min(left.value, right.value),
      left,
      right,
    };
  };
  // arr을 segment된 tree 구함
  const segTree = makeSegArr(arr, 0, arr.length - 1);
  console.log(segTree);

  // 범위들의 최소값 담을 배열
  let result = [];
  // ranges의 각 범위들에 있는 최소값 구해서 배열에 넣기
  const rangeMin = function (tStart, tEnd, rStart, rEnd, segTree) {
    // 3가지의 경우를 생각한다.

    // range가 segTree를 포함하고 있거나 segTree와 같은 경우 segTree의 최소값인 value 리턴
    if (tStart >= rStart && rEnd >= tEnd) return segTree.value;

    // range가 segTreed의 범위를 벗어나는 경우
    if (tStart > rEnd || tEnd < rStart) {
      // js에서 나타낼 수 있는 안전한 최대 정수값으로
      // 범위를 벗어났을 때는 최소값을 최대 정수값으로 놓고 비교들어간다.
      return Number.MAX_SAFE_INTEGER;
    }

    // (그 외 경우)range가 segTree의 법위가 겹치는 부분이 존재할 경우
    const mid = Math.floor((tStart + tEnd) / 2);
    // 범위의 left와 right중 최소값 구하기
    return Math.min(
      rangeMin(tStart, mid, rStart, rEnd, segTree.left),
      rangeMin(mid + 1, tEnd, rStart, rEnd, segTree.right)
    );
  };

  // ranges의 갯수만큼 rangeMin 돌려주기
  for (let i = 0; i < ranges.length; i++) {
    result.push(
      rangeMin(0, arr.length - 1, ranges[i][0], ranges[i][1], segTree)
    );
  }
  return result;
};

const arr = [1, 3, 2, 7, 9, 11];
const mins = rangeMinimum(arr, [
  [1, 4],
  [0, 3],
]);
console.log(mins); // --> [2, 1]
