const without = function(exclude, arr) {
  exclude.map((excludeElement) => {
    arr = arr.filter((arrElement) => arrElement != excludeElement);
  });
  return arr;
};

console.log(without([5, 6], [1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4]
