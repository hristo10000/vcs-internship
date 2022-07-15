const range = function(from, to){
    return Array.from(Array(to - from + 1).keys())
        .map((_, index) => {
            return index + from;
        });
}

console.log(range(1, 10));
