const countLetters = function(str){
  let ans = {};
  for(let c of str){
    if (c !== " ") {
      if (ans[c]) ans[c] += 1;
      else ans[c] = 1; 
    }
  }
  return ans;
}

module.exports = countLetters;