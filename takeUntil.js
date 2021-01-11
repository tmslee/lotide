const takeUntil = function(array, callback) {
  let ans = [];
  for(let elem of array){
    if(callback(elem)) break;
    else ans.push(elem);
  }
  return ans;
}

module.exports = takeUntil;