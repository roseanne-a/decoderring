const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    //check edge cases
    if (shift > 25 || shift < -25 || shift === 0) return false;
    
    //check if we are encoding or decoding
    let usedShift = 0;
    encode ? usedShift = shift : usedShift = shift * -1;

    input = input.toLowerCase();
    let encodedMessage = "";

    for (let i = 0; i < input.length; i++) {
      let letterIndex = input.charCodeAt(i);
      if(letterIndex < 32 || letterIndex > 126) return "Please input normal characters.";
      let shiftedIndex = letterIndex + usedShift;

      if (letterIndex > 122 || letterIndex < 97)
        encodedMessage += input[i];

      //if it reaches the end go around the alphabet
      else if (shiftedIndex > 122) {
        encodedMessage += String.fromCharCode(shiftedIndex - 26);
      } else if (shiftedIndex < 97) {
        encodedMessage += String.fromCharCode(shiftedIndex + 26);
      } else {
        encodedMessage += String.fromCharCode(shiftedIndex);
      }
    }
    return encodedMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
