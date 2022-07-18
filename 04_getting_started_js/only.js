const only = function(type, arr) {
  return arr.every((element) => typeof(element)==type);
};
  
console.log(only('string', [1, 2, 3, 4])); // false
console.log(only('number', [1, 2, 3, 4])); // true
