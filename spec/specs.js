describe ("populateArray", function () {
  it("will create an array containing all numbers from 0 to N", function() {
    expect(populateArray(5)).to.eql([0, 1, 2, 3, 4, 5]);
  });
});

describe ("rootFinder", function () {
  it("will test (prime) to see if prime^2 > n", function() {
   expect(rootFinder(25)).to.equal(6);
 });
});

describe ("findNotPrimes", function() {
  it("will search array to find multiples of our test prime", function() {
    expect(findNotPrimes(3, 4, [0,1,2,3,4,5,6,7,8,9,10])).to.eql([6,9]);
  });
});
