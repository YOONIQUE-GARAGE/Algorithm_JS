function calculateScore(records, value) {
  let result = records.filter(record => record.animal == value);
  let plus = result.reduce((acc,cur,idx) => {return acc+= cur.score;},0);
  return plus;
}