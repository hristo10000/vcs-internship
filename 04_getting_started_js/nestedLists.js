const ol = function(items) {
  let result = '<ol>';
  labels = items.map(function(item) {
    return item['label'];
  });
  children = items.map(function(item) {
    return item['children'];
  });
  let count = 0;
  labels.map((label) => {
    result += '\n<li>' + label;
    if (typeof(children[count]) != 'undefined') {
      result += '\n<ol>';
      children[count].map((childLabel) => {
        result += '\n<li>' + childLabel.label+ '</li>';
      });
      result += '\n</ol>\n';
    }
    result += '</li>';
    count++;
  });
  return result+='\n</ol>';
};

const ul = function(items) {
  let result = '<ul>';
  labels = items.map(function(item) {
    return item['label'];
  });
  children = items.map(function(item) {
    return item['children'];
  });
  let count = 0;
  labels.map((label) => {
    result += '\n<li>' + label;
    if (typeof(children[count]) != 'undefined') {
      result += '\n<ul>';
      children[count].map((childLabel) => {
        result += '\n<li>' + childLabel.label+ '</li>';
      });
      result+='\n</ul>\n';
    }
    result += '</li>';
    count++;
  });
  return result+='\n</ul>';
};

const items = [{'label': 'Item 1'},
  {'label': 'Item 2', 'children': [
    {
      'label': 'Level 2 of Item 2',
    },
    {
      'label': 'Another level 2',
    },
  ]}];

console.log(ol(items));
console.log(ul(items));
