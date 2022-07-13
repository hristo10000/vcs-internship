const ul = function(items) {
  let result = '<ul>';
  labels = items.map(function(item) {
    return item['label'];
  });

  childrens = items.map(function(item) {
    return item['children'];
  });
  let count = 0;
  labels.map((label) => {
    result += '\n<li>' + label.toString();
    if (childrens[count] != undefined) {
    result += '\n<ul>';
      childrens[count].map((childLabel) => {
        result += '\n<li>' + childLabel.label.toString()+ '</li>';
      });
      result+='\n</ul>\n';
    }
    result += '</li>';
    count++;
  });
  return result+='\n</ul>';
};

const ol = function(items) {
  let result = '<ol>';
  labels = items.map(function(item) {
    return item['label'];
  });

  childrens = items.map(function(item) {
    return item['children'];
  });
  let count = 0;
  labels.map((label) => {
    result += '\n<li>' + label.toString();
    if (childrens[count] != undefined) {
      result += '\n<ol>';
      childrens[count].map((childLabel) => {
        result += '\n<li>' + childLabel.label.toString()+ '</li>';
      });
      result+='\n</ol>\n';
    }
    result += '</li>';
    count++;
  });
  return result+='\n</ol>';
};

var items = [{ "label" : "Item 1"},
{ "label" : "Item 2", "children" : [
   {
       "label" : "Level 2 of Item 2"
   },
   {
       "label" : "Another level 2"
   }
]}];


console.log(htmlOl = ol(items));
console.log(htmlOl = ul(items));
