const containsAll = function(elements, arr) {
  const allFound = elements.every( (elementsEl) => {
    const helpArr = arr.filter((arrEl) => arrEl === elementsEl);
    if (helpArr.length === 0) {
      return false;
    } else {
      return true;
    }
  });
  return allFound ? true : false;
};

console.log(containsAll([1, 2], [1, 2, 3, 4, 5]));
console.log(containsAll([1, 5], [1, 2, 3, 4]));
