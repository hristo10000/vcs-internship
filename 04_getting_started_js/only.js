/* eslint-disable linebreak-style */
const only = function(type, arr) {
    let flag = true;
    arr.forEach((element) => {
      if (typeof(element)!=type) {
        flag = false;
      }
    });
    return flag;
  };
  
  console.log(only('string', [1, 2, 3, 4])); // false
  console.log(only('number', [1, 2, 3, 4])); // true
  