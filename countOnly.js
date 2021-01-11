const countOnly = function(allItems, itemsToCount){
  let res = {};
  for(let item of allItems){
    if(itemsToCount[item]){
      if(res[item]) res[item] += 1;
      else res[item] = 1;
    }
  }
  return res;
}

module.exports = countOnly;