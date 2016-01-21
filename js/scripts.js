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

var findNotPrimes = function(prime, rootLimit, limitArray, limit) {
  for (var i = 2; i < limit; i++) {
    var test = prime * i;
    delete limitArray[test];
  }
//  console.log(limitArray);
  return limitArray;
}

var primeFinder = function(limit) {
 var limitArray = populateArray(limit);
 var rootLimit = rootFinder(limit);
 console.log(rootLimit);
 delete limitArray[0];
 delete limitArray[1];
 for (var i=2; i < rootLimit; i++) {
   findNotPrimes(i, rootLimit, limitArray, limit);
   console.log(limitArray);
 }
 return limitArray;

 }
// limitArray.forEach(function(rootLimit)) {
//   findNotPrimes(XXXXXX, rootLimit, limitArray)
// END BUSINESS LOGIC

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var limit = $("input#primeInput").val();
//    console.log(word)

    var primeList = primeFinder(limit);
//    console.log(latinWord);

//    console.log(latinPhrase);
    $("#translatedText").text(primeList);

  });
});
