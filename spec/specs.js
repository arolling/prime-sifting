describe ("primeFinder", function () {
  it("will create an array containing all numbers from 0 to N", function() {
    expect(primeFinder(5)).to.eql([0, 1, 2, 3, 4, 5]);
  });
//it("will test (prime) to see if prime^2 > n", function() {
//    expect(primeFinder(25)).to.equal(6);
//  });
});
