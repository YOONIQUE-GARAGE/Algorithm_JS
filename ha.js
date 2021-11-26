// 다중배열
// point는 forEntries
function forEntriesFunc(arr) {
  arr = arr.map((el) => Object.fromEntries(el));
  arr.sort(function(a,b){
    return a.age < b.age ? -1 : parseInt(a.ID) > parseInt(b.ID) ? 1 : 0;
  })
  console.log(arr);
  let reuslt = [];
  for( let i = 0; i < arr.length; i++){
    if(arr[i].firstName && arr[i].lastName){
      reuslt.push(`${arr[i]['firstName']} ${arr[i]['lastName']}`)
    }else if(arr[i].firstName === undefined){
      reuslt.push(arr[i]['lastName']);
    }else if(arr[i].lastName === undefined){
      reuslt.push(arr[i]['firstName']);
    }else {
      return '';
    }
  }
  return reuslt;
}


let list = [
  [
    ['firstName', 'Joe'],
    ['age', 42],
    ['gender', 'male'],
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['gender', 'female'],
  ],
  [
    ['lastName', 'Kim'],
    ['age', 40],
    ['gender', 'female'],
  ],
];

let output = forEntriesFunc(list);
console.log(output); // --> ['Mary Jenkins', 'Kim', 'Joe'];



function match(arr, id) {
  // TODO: 여기에 코드를 작성합니다.
  for(let obj of arr){
    if(obj.children !== undefined){
      if(obj.id === id){
        return obj;
      }else {
        let rs = test7(obj.children, id)
        if(rs !== null){
          return rs;
        }
      }
    }else{
      if(obj.id === id){
        return obj;
      }
    }
  }
  return null;
}

let input = [
  {
    id: 1,
    name: 'johnny',
  },
  {
    id: 2,
    name: 'ingi',
    children: [
      {
        id: 3,
        name: 'johnson',
      },
      {
        id: 5,
        name: 'steve',
        children: [
          {
            id: 6,
            name: 'lisa',
          },
        ],
      },
      {
        id: 11,
      },
    ],
  },
  {
    id: '13',
  },
];

let output = match(input, 69);
console.log(output); // --> { id: 1, name: 'johnny' }

output = match(input, 5);
console.log(output); // --> { id: 5, name: 'steve', children: [{ id: 6, name: 'lisa' }] }

output = match(input, 99);
console.log(output); // --> null


// 숫자 각 자릿수 더함
function numberAdd(num) {
  // TODO: 여기에 코드를 작성합니다.
  if(num === 0){
    return 0;
  }else if(num % 10 === num){
    return num;
  }
  let arr = String(num).split('');
  let lastNum = arr.reduce((acc, cur) => Number(acc) * Number(cur));
  return numberAdd(lastNum);
}

let output = numberAdd(786);
console.log(output); // --> 0
