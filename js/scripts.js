var scrabbleLetterScore = function (inputLetter) { // this function returns the score of each letter

  var inputLetterUC = inputLetter.toUpperCase(); // ensure letter is upper case for comparison
  var letterScore = 0;
  var wordScoreDictionary = {"A":1,"B":3,"C":3,"D":2,"E":1,"F":4,"G":2,"H":4,"I":1,"J":8,"K":5,"L":1,"M":3,"N":1,"O":1,"P":3,
                             "Q":10,"R":1,"S":1,"T":1,"U":1,"V":4,"W":4,"X":8,"Y":4,"Z":10};

  letterScore = wordScoreDictionary[inputLetterUC];
  if (!letterScore) { // inputLetter not found in validWordScoreDictionary
    letterScore = 0; // set error condition
  };

  return letterScore;

};


var scrabbleScore = function (inputWord) { // this function returns the score of the entire word

  var inputWordArr =  inputWord.split(""); // split inputWord string into array of characters
  var wordScore = 0;
  var letterScore = 0;

  for (var index = 0; index < inputWordArr.length; index++) { // iterate through each letter in the word
    letterScore = scrabbleLetterScore(inputWordArr[index]); // get letter score
    if (letterScore === 0) { // bad input; set the score to 0 and stop iterating
      wordScore = 0;
      break;
    } else {
      wordScore = wordScore + letterScore;
    };
  };

  return wordScore;

};


$(document).ready (function ()    {

  $("form#input-form").submit (function (event) {

    var inputWord= $("input#input-word").val(); // get the word from the form
    var wordScore = scrabbleScore(inputWord); // calculate the word score
    if (!inputWord || wordScore === 0) { // if no input or bad input, show error to user
      // the lines below show the input error by turning the input label and box border red and
      // putting a red x glyphicon at the end of the input box
      $("input#input-word").parent().removeClass("has-error has-success has-feedback");
      $("input#input-word").parent().find("span").remove();
      $("input#input-word").parent().addClass("has-error has-feedback");
      $("input#input-word").parent().append("<span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>");
    } else {
      // the lines below show input success by turning the input label and box border green and
      // putting a green check mark glyphicon at the end of the input box
      $("input#input-word").parent().removeClass("has-error has-success has-feedback");
      $("input#input-word").parent().find("span").remove();
      $("input#input-word").parent().addClass("has-success has-feedback");
      $("input#input-word").parent().append("<span class=\"glyphicon glyphicon-ok form-control-feedback\"></span>");

      inputWord = inputWord.toUpperCase(); // display output in all caps like Scrabble tiles
      $("#show-results .input-word-out").text(inputWord);
      $("#show-results .scrabble-score").text(wordScore);
      $("#show-results").show(); // show the results; the area is initially hidden by the css
    };

    event.preventDefault();

  });
});
