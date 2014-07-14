describe ("scrabbleScore", function () {
  it("should return the correct value of a single letter", function () {
    scrabbleScore("A").should.equal(1);
  });
});
