
let s = 'xyz';
let n = 3;

function toAscii(s,n){
  return s.split("").map((str)=>{
    if (str == " "){
        return str;
    }
    const caesarAscii  = str.charCodeAt();
    console.log(`${caesarAscii} / ${str.toUpperCase().charCodeAt()+n} / ${str.toUpperCase()}`);
    return str.toUpperCase().charCodeAt() + n > 90 ? String.fromCharCode(caesarAscii + n - 26) 
        : String.fromCharCode(caesarAscii + n)
}).join('')
}



