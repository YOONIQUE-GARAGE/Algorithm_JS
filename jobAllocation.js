const jobAllocation = function (jobs, workersNum) {
  // 배열 jobs를 workersNum만큼 나눠야 한다.
  // 나눈 구간의 합이 제일 작은 경우로 나눠야 한다.
  // memo[i][j]는 i번째 worker가 j번째 job부터 작업한다고 할 때,
  // 최대 작업량이 최소가 되는 분배에서의 최대 작업량을 저장한다.
  // i, j 모두 인덱스이므로 0부터 시작
  const memo = [];
  for (let i = 0; i < workersNum; i++) memo.push(Array(jobs.length).fill(-1));
  // 마지막 작업자는 남아있는 모든 작업을 다 해야하므로 쉽게 계산이 가능하다.
  // 마지막 작업자는 최대 나머지 작업자의 수만큼을 제외한 일만 할 수 있다.
  let workload = 0;
  for (let i = jobs.length - 1; i >= workersNum - 1; i--) {
    workload = workload + jobs[i];
    memo[workersNum - 1][i] = workload;
  }
};

let jobs = [1, 2, 3, 4, 5, 6, 7];
let workersNum = 3;
let output = jobAllocation(jobs, workersNum);
console.log(output); // --> 11 (1, 2, 3, 4 / 5, 6 / 7)

jobs = [10, 2, 3, 4, 16, 10, 10];
workersNum = 4;
output = jobAllocation(jobs, workersNum);
console.log(output); // --> 19 (10, 2, 3, 4 / 16 / 10 / 10
