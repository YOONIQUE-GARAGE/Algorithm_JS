let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  //console.log(node.value);
  // 담야햐 하는 녀석들 확이 배열
  
  // 이미 담은 녀석들 확인용 배열
  const checked = [];
  console.log(node);
  let uncheked = [node];
  console.log('0: '+ uncheked);
  while(uncheked.length !== 0){
    const curNode = uncheked.shift();
    console.log('curNode: '+ curNode);
    if(!checked.includes(curNode)){
      checked.push(curNode.value);
    }  
    console.log('1: '+ uncheked);
    uncheked = uncheked.concat(curNode.children);
    console.log('2: '+ uncheked);
  }
  return checked;
} 
  

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};


let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]