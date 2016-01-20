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
