const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];


function zipList(list1, list2) {
  const res = [];
  for (let i = 0; i < list1.length; i++) {
    res.push(list1[i], list2[i]);
  }
  return res;
}
console.log(zipList(test1, test2));

function zipListTheEasyWay(list1, list2) {
  const pairs = _.zip(list1, list2);
  return _.flatten(pairs);
}

console.log(zipListTheEasyWay(test1, test2));
