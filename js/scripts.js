var populateArray = function(limit) {
  var limitArray = [];
  for (var i=0; i <= limit; i++) {
    limitArray.push(i);
  }
  //console.log(limitArray);
  return limitArray;
}

var rootFinder = function(limit) {
  for (var i=2; i < limit; i++) {
    if (i * i > limit) {
      var rootLimit = i;
      return rootLimit;
    }
  }
}

var findNotPrimes = function(prime, rootLimit, limitArray) {

  var newArray = [];

  for (var i = 2; i < rootLimit; i++) {
    var test = prime * i;
    newArray.push(limitArray.indexOf(test));
  }
  console.log(newArray);
  return newArray;
}
