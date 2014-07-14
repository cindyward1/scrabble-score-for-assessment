var scrabbleLetterScore = function (inputLetter) {

  var inputLetterUC = inputLetter.toUpperCase(); // ensure letter is upper case for comparison
  var letterScore = 0;

  switch (inputLetterUC) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
    case "L":
    case "N":
    case "R":
    case "S":
    case "T": letterScore = 1; break;
    case "D":
    case "G": letterScore = 2; break;
    case "B":
    case "C":
    case "M":
    case "P": letterScore = 3; break;
    case "F":
    case "H":
    case "V":
    case "W":
    case "Y": letterScore = 4; break;
    case "K": letterScore = 5; break;
    case "J":
    case "X": letterScore = 8; break;
    case "Q":
    case "Z": letterScore = 10; break;
    default: letterScore = 0; break; // should not happen
  };
  
  return letterScore;  

};


var scrabbleScore = function (inputWord) {

  var wordScore = 0;

  wordScore = scrabbleLetterScore(inputWord); // assume only a single letter input

  return wordScore;

};

