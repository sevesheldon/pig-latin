//how to check for only alphabetic characters??

function isAVowel(x) {
	var vowelArray = ["a", "e", "i", "o", "u"];
  var returnValue = false;

  for (var i = 0; i < vowelArray.length; i++) {
  	if(x === vowelArray[i]) {
    	returnValue = true;
    }
  }
  return returnValue;
}

function pigLatinTrans (inputSentence) {
  inputSentence = inputSentence.toLowerCase();
  var words = inputSentence.split(" ");
  var currentWord, wordLength, oneLetterWord, restOfWord, finalWord;
  var firstLetter, secondLetter, thirdLetter;
  var result = "";

  for (var i = 0; i < words.length; i++) {
		currentWord = words[i];
		wordLength = currentWord.length;
    firstLetter = currentWord.slice(0, 1);
    secondLetter = currentWord.slice(1, 2);
    thirdLetter = currentWord.slice(2, 3);
    leadingY = false;

    if (firstLetter === "y") {
      leadingY === true;
    }

    if (wordLength === 1) {
    	oneLetterWord = currentWord + "ay";
      finalWord = oneLetterWord;
    } else if (isAVowel(firstLetter)) {
	    finalWord = currentWord + "ay";
    }
    //   else if(!isAVowel(firstLetter)) {
    //   //condition to move beginning consectutive consenants to the end together: three = eethray
    // } else if () {
    //   //condition for if first two letters are "qu" (and any consenant before) to move those to the end: quest = estquay / squeeze = eezesquay
    // } else if () {
    //   //condition for if first letter is "y" to treat it like a consenant, otherwise like a vowel: your = youray / style = ylestay
    // }
      else {
      restOfWord = currentWord.slice(1, currentWord.length);
      finalWord = restOfWord + firstLetter + "ay";
    }

    //need loop to check if it is the last word in the sentence, if so then don't add " " - but rather "."

    result = result + finalWord + " "; //for adding space after each word
    console.log(result);
 	}
  return result;
  }

$(document).ready(function() {
  $("form").submit(function(event) {
  	event.preventDefault();

    var inputSentence = $("#sentence").val();
    var result = pigLatinTrans(inputSentence);

    $("#result").fadeIn();
  	$("#result h4").text(result);

  });
});
