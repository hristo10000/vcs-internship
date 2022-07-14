const containsAll = function(elements, arr) {
  return elements.every((elementToCheck) =>{
    return arr.some((arrElement) => arrElement===elementToCheck);
  });
};

console.log(containsAll([1, 2], [1, 2, 3, 4, 5])); // true
console.log(containsAll([1, 5], [1, 2, 3, 4])); // false
