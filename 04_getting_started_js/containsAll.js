/* eslint-disable linebreak-style */
const containsAll = function(elements, arr) {
    let flag = true;
    elements.forEach((element) => {
      if (!arr.includes(element)) {
        flag = flase;
      };
    });
    return flag;
  };
  
  console.log(containsAll([1, 2, 3], [1, 2, 3, 4, 5]));
  