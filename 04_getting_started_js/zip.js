const zip = function(...args) {
  const result = [];
  let tempArr = [];
  for (let i=0; i<3; i++) {
    result[i] = [];
    args.forEach((list) => {
      if (typeof(list[i])!==undefined) {
        tempArr = tempArr.concat(list[i]);
        result[i] = result[i].concat(tempArr);
        tempArr = [];
      }
    });
  }
  return result;
};

console.log(zip([1, 2, 3], [4, 5, 6]));
// [ [1, 4], [2, 5], [3, 6] ]

console.log(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]));
// [ [1, 4, 7], [2, 4, 8], [3, 6, 9] ]

// To be able to see the the full output you will need to debug the program
