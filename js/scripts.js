var populateArray = function(limit) {
  var limitArray = [];
  for (var i=0; i <= limit; i++) {
    limitArray.push(i);
  }
  console.log(limitArray);
  return limitArray;
}

var rootFinder = function(limit) {
  for (var i=2; i < limit; i++) {
    if (i * i > limit) {
      console.log(i);
      return i;
    }
  }
}
