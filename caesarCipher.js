
let s = 'xyz';
let n = 3;

function toAscii(s,n){
  let asciiArr = '';
  let num = 0;
  for(let i = 0; i < s.length; i++){
    let caesarAscii = s.charCodeAt(i);
    console.log(`s: ${caesarAscii}`);
    console.log(`n: ${n}`);
    console.log((caesarAscii + n));
    if(91 <= (caesarAscii + n) < 97){
      num = (caesarAscii + n) - 90;
      caesarAscii = String.fromCharCode(64 + num);
      console.log(`1: ${caesarAscii}`);
    }
    if((caesarAscii + n) >= 123){
      num = (caesarAscii + n) - 122;
      caesarAscii = String.fromCharCode(96 + num);
      console.log(`2: ${caesarAscii}`);
    }
    if(caesarAscii == 32){
      console.log(caesarAscii);
      caesarAscii = ' ';
      console.log(`3: ${caesarAscii}`);
    }else {
      caesarAscii = String.fromCharCode(caesarAscii + n);
      console.log(`4: ${caesarAscii}`);
    }
    asciiArr += caesarAscii;
    console.log(asciiArr);
  }
  return asciiArr;
}

console.log(`asciiArr: ${toAscii(s,n)}`);


