function findShortestWord(arr) {
  if(arr.length === 0 || arr.filter(a => typeof(a) == 'string') == ''){
    return '';
  }
  return arr.filter(a => typeof(a) == 'string').reduce((a,c)=> a.length > c.length ? c : a);
}