// 1: 땅, 0: 물
// 섬이란 물로 둘러싸여 있는 땅을 말합니다.
// 가로 혹은 세로로 땅이 연결되어 있는 경우 하나의 섬으로 간주합니다.
// 2차원 배열의 범위 밖은 물로 둘러싸여 있다고 가정합니다.
const countIslands = function (grid) {
  // TODO: 여기에 코드를 작성합니다.
  // 결국 땅 주위 네군대가 0인 곳을 찾으면 된다.
  // dfs 이용
  const HEIGHT = grid.length;
  const WIDTH = HEIGHT && grid[0].length;
  let count = 0;

  for (let row = 0; row < HEIGHT; row++) {
    for (let col = 0; col < WIDTH; col++) {
      if (grid[row][col] === "0") continue;
      count++;
      searchIsland(row, col);
    }
  }
  function searchIsland(row, col) {
    if (row < 0 || col < 0 || row >= HEIGHT || col >= WIDTH) return;
    if (grid[row][col] === "0") return;
    // 가로 또는 세로로 연결된 땅은 하나의 섬으로 간주하므로
    // 연결된 땅이 있으면 중복해서 섬으로 ++하지 않기 위해 물로 바꿔줌
    grid[row][col] = "0";
    // 주위 4군데 확인
    searchIsland(row - 1, col);
    searchIsland(row + 1, col);
    searchIsland(row, col - 1);
    searchIsland(row, col + 1);
  }

  return count;
};
let grid = [
  ["0", "1", "1", "1"],
  ["0", "1", "1", "1"],
  ["1", "1", "0", "0"],
];
let result = countIslands(grid);
console.log(result); // --> 1

grid = [
  ["0", "1", "1", "1", "0"],
  ["0", "1", "0", "0", "0"],
  ["0", "0", "0", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "1", "0"],
];
result = countIslands(grid);
console.log(result); // --> 3
