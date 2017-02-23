## Specs
* For words beginning with a vowel, add "ay" to the end.
  * Input: "a"
  * Output: "aay"

* For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay"
  * Input: "shirt"
  * Output: "irtshay"

* For words in which the first consonants include "qu", move the "u" along with the "q"
  * Input: "quill"
  * Output: "illquay"

  * Input: "squeal"
  * Output: "ealsquay"

* For words beginning with "y" treat "y" as a consonant
  * Input: "yahoo"
  * Output: "ahooyay"

* For an input with multiple words, each word will be converted to pig-latin
  * Input: "hello from epicodus"
  * Output: "ellohay omfray epicodusay"

* For an input with capitalized characters, translate to pig-latin regardless of capitalization
  * Input: "Translator"
  * Output: "anslatorTray"

* The program ignores non-alphabetical characters since they cannot be values
  * Input: "?"
  * Output: "?"
