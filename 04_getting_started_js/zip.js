const zip = function(...args) {
  const result = [];
  let tempArr = [];
  let count = 0;

  args[0].map(_ =>{
    result[count] = [];
    args.forEach((list) => {
      if (typeof(list[count])!==undefined) {
        tempArr = tempArr.concat(list[count]);
        result[count] = result[count].concat(tempArr);
        tempArr = [];
      }
    });
    count++;
  });
  return result;
};

console.log(zip([1, 2, 3], [4, 5, 6]));
// [ [1, 4], [2, 5], [3, 6] ]

console.log(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]));
// [ [1, 4, 7], [2, 4, 8], [3, 6, 9] ]

// To be able to see the the full output you will need to debug the program
