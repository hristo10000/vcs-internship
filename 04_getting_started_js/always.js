/* eslint-disable linebreak-style */
const always = function(value) {
    return function() {
      return value;
    };
  };
  
  const f = always(5);
  console.log(f());
  