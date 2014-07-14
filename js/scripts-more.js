var scrabbleLetterScore = function (inputLetter) {
  
  var scrabbleTable =  [["A",1],["B",3],["C",3],["D",2],["E",1],["F",4],["G",2],
                        ["H",4],["I",1],["J",8],["K",5],["L",1],["M",3],["N",1],
                        ["O",1],["P",3],["Q",10],["R",1],["S",1],["T",1],["U",1],
                        ["V",4],["W",4],["X",8],["Y",4],["Z",10]];

  inputLetter = inputLetter.toUpperCase(); // ensure letter is upper case for comparison
  var letterScore = 0;

  for (for index = 0; index < scrabbleTable.length; index ++) {
    if (inputLetter === scrabbleTable[index][0]) {
      letterScore = scrabbleTable[index][1];
      break;
    };
  };

  return letterScore;

};


var scrabbleScore = function (inputWord) {

  var inputWordArr =  inputWord.split(""); // split inputWord string into array of characters
  var wordScore = 0;

  for (index1 = 0; index1 < inputWordArr.length; index1++) {
    wordScore = wordScore + scrabbleLetterScore(inputWordArr[index1]);
  };

  return wordScore;
  
};

