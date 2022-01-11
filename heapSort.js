// heapSort(minHeap)
// - 노드 삽입
// 1. 트리의 맨 아래 요소 추가
// 2. 부모와 비교해서 부모노드의 값이 자기보다 크면 swap
// 3. 부모노드가 자기보다 작을때까지 혹은 루트 노드에 도달할 때까지 2번 계속 반복
// - 노드 꺼내오기
// 4. 루트 꺼내기
// 5. 루트에 제일 깊은 depth에 있는 자식을 루트에 넣기
// 6. 5번상태는 정렬되지 않은 상태므로 자식노드와 비교해 swap
// 7. 정렬될때까지 6번 반복

// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 크기에 따른 자리 이동
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// 부모노드 index
function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  // 루트를 0으로 보고, 자식을 3라 하면 부모는 1이 되니까
  // 부모의 인덱스
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  // 맨 아래부터 item추가
  heap.push(item);
  if (heap.length > 1) {
    // 부모와 자식 비교해서 부모가 더 크면 스왑 반복
    let curIdx = heap.length - 1;
    let parentsIdx = getParentIdx(curIdx);
    // 부모가 자식의 값보다 작아질때까지 스왑 반복
    while (heap[curIdx] < heap[parentsIdx]) {
      swap(curIdx, parentsIdx, heap);
      // 자식과 부모 자리 바꾼 후 현재idx와 부모 idx도 다시 구해서 while문 반복하도록
      curIdx = parentsIdx;
      parentsIdx = getParentIdx(curIdx);
    }
  }
  // 여기서 heap은 que구조를 갖는다
  return heap;
}

function removeRoot(heap) {
  // TODO: 여기에 코드를 작성합니다.
  // 제일 마지막 자식을 root로 이동후 마지막 자식 제거
  swap(0, heap.length - 1, heap);
  heap.pop();
  // BMR
  if (heap.length === 0) return [];
  let curIdx;
  let minIdx = 0;
  while (curIdx !== minIdx) {
    // 반복작업위해 minIdx를 curIdx에 대입해주기 그럼 따로 구하지 않아도 swap으로 인한 curIdx변화를 반영가능
    curIdx = minIdx;
    let leftIdx = curIdx * 2 + 1;
    let rightIdx = curIdx * 2 + 2;
    // 최소값 셋팅
    // 왼쪽 노드의 값이 현재 값보다 작을때
    if (leftIdx < heap.length && heap[leftIdx] < heap[minIdx]) {
      minIdx = leftIdx;
    }
    // 오른쪽 노드의 값이 현재값보다 작을때
    if (rightIdx < heap.length && heap[rightIdx] < heap[minIdx]) {
      minIdx = rightIdx;
    }
    swap(curIdx, minIdx, heap);
  }
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  // TODO: 여기에 코드를 작성합니다.
  const result = [];
  while (minHeap.length > 0) {
    result.push(minHeap[0]);
    minHeap = removeRoot(minHeap);
  }
  return result;
};

let output = heapSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = heapSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]

output = heapSort([4, 10, 3, 5, 1]);
console.log(output); // --> [1, 3, 4, 5, 10]
