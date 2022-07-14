const countBy = function(countingFunction, arr) {
  return arr.reduce((result, item) => {
    const key = countingFunction(item);
    if (!result[key]) {
      result[key] = 0;
    }
    result[key] ++;
    return result;
  }, {});
};

const students = [{
  'name': 'Daniel Taskoff',
  'course': 'Frontend JavaScript',
}, {
  'name': 'Elena Jeleva',
  'course': 'Programming 101',
}, {
  'name': 'Luboslava Dimitrova',
  'course': 'Frontend JavaScript',
}, {
  'name': 'Anton Antonov',
  'course': 'Core Java',
}, {
  'name': 'Nikola Dichev',
  'course': 'Core Java',
}];

console.log(countBy(function(student) {
  return student.course;
}, students));
