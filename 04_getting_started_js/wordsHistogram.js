const wordsHistogram = (str) => {
    return str.toLowerCase().split(' ').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
  
  };
  const str = 'A function is a function with a very functional function';
  console.log(wordsHistogram(str));
  