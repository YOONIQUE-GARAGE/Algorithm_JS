const largestRectangularArea = function (histogram) {
  // TODO: 여기에 코드를 작성합니다.
  let maxSize = 0;
  // 사각형
  // 가장 낮은 높이를 포함 한다면
  // 사각형의 높이 = 구간의 막대 중 가장 낮은 높이를 가진 막대의 높이
  let base = histogram.length;
  let high = histogram[0];
  for (i = 1; i < base; i++) {
    high = Math.min(high, histogram[i]);
  }
  const includeSize = base * high;
  //console.log(includeSize);
  // 포함하지 않는다면(여기서 구간트리 사용하나?? 포함하지 않는 범위??)
  // high인 index 구하기
  let index = [];
  for (let i = 0; i < histogram.length; i++) {
    if (histogram[i] === high) index.push(i);
  }
  console.log(index);
  let start;
  let end;
  const excludeSize;
  
  // return Math.max(inCludeSize, exCludeSize);
};

let histogram = [2, 1, 4, 5, 1, 3, 3];
let output = largestRectangularArea(histogram);
console.log(output); // --> 8

histogram = [6, 2, 5, 4, 5, 1, 6];
output = largestRectangularArea(histogram);
console.log(output); // --> 12
/*
6 | x           x
5 | x   x   x   x
4 | x   O O O   x
3 | x   O O O   x
2 | x x O O O   x
1 | x x O O O x x
------------------
*/
