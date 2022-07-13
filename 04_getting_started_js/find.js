const find = function(predicate, arr) {
  let isFound = false;
  let result = undefined;
  arr.map((element) => {
    if (predicate(element) && !isFound) {
      result = element;
      isFound = true;
    }
  });
  return result;
};

const checkIfZero = function(n) {
  return n==0;
};

const array = [1, 3, 4, 9, 0, 2, 4, 6];

console.log(find(checkIfZero, array));
