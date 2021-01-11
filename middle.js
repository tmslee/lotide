const middle = function(arr) {
  if(arr.length  < 3) return [];
  else{
    let mid = Math.ceil(arr.length / 2) - 1;
    let even = arr.length % 2 === 0; 
    return even ? arr.slice(mid, mid + 2) : arr.slice(mid, mid + 1);
  }
}

module.exports = middle;