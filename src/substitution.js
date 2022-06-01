const substitutionModule = (function () {

  //creating a helper function to find the character that substitues
  function _findCorrespondingCharacter(inputAlpha, outputAlpa, input){
    let message = "";

    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") message += " ";
      else message += outputAlpa[inputAlpha.indexOf(input[i])];
    }
    return message;

  }

  function substitution(input, alphabet, encode = true) {
    //checking if there is no alphabet passed it or is not 26 characters
    if (!alphabet || !input || alphabet.length != 26) {
      return false;
    } 
    //filtering into an array where one character occurs more than once
    else {
      let checkedAlphabet = alphabet.split("");
      for (let i = 0; i < alphabet.length; i++) {
        if (checkedAlphabet.filter((letter) => letter === alphabet[i]).length > 1) {
          return false;
        }
      }
    }

    let actualAlphabet = "abcdefghijklmnopqrstuvwxyz";

    //use the helper function to output the string with its substituted values
    if (encode === true) {
      input = input.toLowerCase();

      return _findCorrespondingCharacter(actualAlphabet, alphabet, input);
    } else {
      return _findCorrespondingCharacter(alphabet, actualAlphabet, input);
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
