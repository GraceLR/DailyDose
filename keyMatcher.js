
const eqArrays = (arr1, arr2) => {

    if (typeof arr1 === 'number') {
      return arr1 === arr2;
    }
  
    let result = true;
    for (let i = 0; i < arr1.length; i++) {
      result = result && (arr1[i] === arr2[i]);
    }
    return result && (arr1.length === arr2.length);
  
  };
  
  const eqObjects = (obj1, obj2) => {
  
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    let cond = true;
  
    if (key1.length !== key2.length) {
  
      return false;
  
    } else {
  
      for (let key in obj1) {
  
        if (typeof obj1[key] !== 'object') {
          cond = cond && (eqArrays(obj1[key], obj2[key]));
        } else {
          cond = cond && eqObjects(obj1[key], obj2[key]);
        }
      }
    }
  
    return cond;
  
  };
  
  const keyMatcher = function(firstObj, secondObj, key) {
  
    if (firstObj[key] === undefined || secondObj[key] === undefined) {
      return false;
    } else {
      return eqObjects(firstObj[key], secondObj[key]);
    }
  
  };