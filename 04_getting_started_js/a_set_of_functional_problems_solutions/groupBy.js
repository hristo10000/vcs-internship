/* eslint-disable linebreak-style */
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

const groupBy = function(property, objectArray) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    // Add object to list for given key's value
    acc[key].push(obj);
    return acc;
  }, {});
};


console.log(groupBy('course', students));
