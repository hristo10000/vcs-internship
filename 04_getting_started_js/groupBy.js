const groupBy = function(groupingFunction, arr) {
  return arr.reduce((result, item) => {
    const key = groupingFunction(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
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

console.log(groupBy(function(student) {
  return student.course;
}, students));
