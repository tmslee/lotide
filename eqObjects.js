const lotide = require('./index');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keyList1 = Object.keys(object1);
  let keyList2 = Object.keys(object2);
  if (keyList1.length !== keyList2.length) return false;
  else{
    for(let key of keyList1){
      if (!object2[key]) return false;
      else {
        let val1 = object1[key];
        let val2 = object2[key];
        if (val1 instanceof Array && val2 instanceof Array) {
          if (!lotide.eqArrays(val1, val2)) return false;
        }
        else if(typeof val1 === typeof val2 && typeof val1 === 'object'){
          if(!eqObjects(val1, val2)) return false;
        }
        else if(val1 !== val2) return false;
      }
    }
    return true;
  }
};

module.exports = eqObjects;