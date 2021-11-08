// 중요점!! split는 리턴값이 배열이다.
// 따라서 let nums = []; nums = nums.push(x.split('')); 하게되면 2차원 배열이 되어버린다.
// 그래서 let nums; 선언만 한 후에 nums = x.split(''); 하면 저절로 배열로 만들어서 들어간다.
function solution(x) {
  x = x +'';
  let nums = x.split('');
  
  let total = 0;
  
  for( let i = 0; i < x.length; i++){
    total += parseInt(nums[i]);
  }
  
  return x % total == 0 ? true : false;
}