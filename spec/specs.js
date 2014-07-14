describe ("scrabbleScore", function () {
  it("should return the correct value of a single letter", function () {
    scrabbleScore("A").should.equal(1);
  });
  it("should return the correct value of a single word with 2 letters", function () {
  	scrabbleScore("AS").should.equal(2);
  });
  it("should return the correct value of a single word with multiple letters", function () {
  	scrabbleScore("STRENGTH").should.equal(12);
  });
// Test case belatedly added to flag error condition of a input character that is not a letter A-Z/a-z
  it("should return zero as the value of an invalid character", function () {
    scrabbleScore(".").should.equal(0);
  });
  it("should return zero as the value of word containing an invalid character", function () {
    scrabbleScore("don't").should.equal(0);
  });
});
