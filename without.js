const makeSetFromArray = arr =>{
  let ans = new Set();
  for(let elem of arr){
    if(typeof elem === 'object') ans = new Set([...ans, ...makeSetFromArray(elem)]);
    else ans.add(elem);
  }
  return ans;
}

const without = (source, itemsToRemove) => {
  let removeSet = makeSetFromArray(itemsToRemove);
  return withoutHelper(source, removeSet);
};

const withoutHelper = (source, removeSet) => {
  let ans = [];
  for (let elem of source){
    if (typeof elem === 'object') {
      let subarr = withoutHelper(elem, removeSet);
      if (subarr.length !== 0) ans.push(subarr);
    } else if (!removeSet.has(elem)) {
      ans.push(elem);
    }
  }
  return ans;
}

module.exports = without;