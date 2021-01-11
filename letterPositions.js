const letterPositions = function(str){
  const res = {};
  for(let idx = 0; idx < str.length; idx++){
    let c = str[idx];
    if(c !== " "){
      if(!res[c]) res[c] = [idx];
      else res[c].push(idx); 
    }
  }
  return res;
}

module.exports = letterPositions;