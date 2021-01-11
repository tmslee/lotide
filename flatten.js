const flatten = arr => {
  let ans = [];
  for (let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      ans = [...ans, ... arr[i]];
    }
    else ans.push(arr[i]);
  }
  return ans;
}

const flattenRecursion = arr => {
  let ans = [];
  for(let elem of arr){
    if (Array.isArray(elem)) {
      ans = [...ans, ...flattenRecursion(elem)];
    }
    else ans.push(elem);
  }
  return ans;
}

module.exports = flattenRecursion;