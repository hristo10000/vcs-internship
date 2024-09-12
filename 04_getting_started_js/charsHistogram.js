const str = 'Count the characters in this very profound sentence';

const charsHistogram = function(str) {
  return str.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').toLowerCase().split('')
      .reduce((total, letter) => {
        if (letter != ' ') {
      total[letter] ? total[letter]++ : total[letter] = 1;
        }
        return total;
      }, {});
};

console.log(charsHistogram(str));
