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
});
