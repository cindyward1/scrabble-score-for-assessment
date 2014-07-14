scrabble-score
====================

README for Pig Latin Translator

* Author: Cindy Ward <cindyward@yahoo.com>
* Date created: July 13, 2014
* Created for:  Epicodus, Summer 2014 session

Included; written by author:
* ./README.md (this file)
* ./LICENSE.md (using the "Unlicense" template)
* ./index.html
* ./css/styles.css
* ./img/scrabble.jpg (downloaded from Web)
* ./js/scripts.js
* ./spec/spec-runner.html
* ./spec/specs.js

Included; written by others but required for proper execution of application:
* ./css/bootstrap.js
* ./css/bootstrap.css
* ./js/jsquery-1.11.1.js
* ./spec/chai.js
* ./spec/mocha.js
* ./spec/mocha.css

Description:
This Web application asks the user to enter a word and returns the Scrabble score of the word. Lower case characters will be converted to upper case. The Scrabble scores per letter are as follows:

* 1:  A, E, I, O, U, L, N, R, S, T
* 2:  D, G
* 3:  B, C, M, P
* 4:  F, H, V, W, Y
* 5:  K
* 8:  J, X
* 10: Q, Z

Unresolved issues:
*  	I didn't know how to deal with punctuation in the input. If the user enters any 
	punctuation, it will be scored as 0 and returned in the output. This includes apostrophes in words like don't or isn't.
