const containsAll = function(elements, arr) {
  const allFound = elements.every( (ai) => {
    const helpArr = arr.filter((el) => el === ai);
    if (helpArr.length === 0) {
      return false;
    } else {
      return true;
    }
  });
  return allFound ? true : false;
};

console.log(containsAll([1, 2], [3, 2, 1]));
console.log(containsAll([1, 5], [3, 2, 1]));
