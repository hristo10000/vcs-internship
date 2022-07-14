var str = "A function is a function with a very functional function"
const wordsHistogram = function(str){
  return str.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"").toLowerCase().split(' ').reduce((total, letter) => {
      total[letter] ? total[letter]++ : total[letter] = 1;
      return total;
  }, {});
};
console.log(wordsHistogram(str));
