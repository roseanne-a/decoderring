// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    let polybiusCode = "";

    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        let codedLetter = input.charCodeAt(i);
        if(codedLetter < 32 || codedLetter > 126) return "Please input normal characters.";
        if (codedLetter === 105 || codedLetter === 106) {
          polybiusCode += "42";
        } else if (codedLetter === 107) {
          polybiusCode += "52";
        } 
        //find the difference between the first letter in the row and the letter to be found and times it by 10 and add to the first number
        //for example A->E 11->51 and charCode 97->101 4*10=40+11=51
        else if (codedLetter >= 97 && codedLetter <= 101) {
          let code = 11 + 10 * (codedLetter - 97);
          polybiusCode += code.toString();
        } else if (codedLetter >= 102 && codedLetter <= 104) {
          let code = 12 + 10 * (codedLetter - 102);
          polybiusCode += code.toString();
        } else if (codedLetter >= 108 && codedLetter <= 112) {
          let code = 13 + 10 * (codedLetter - 108);
          polybiusCode += code.toString();
        } else if (codedLetter >= 113 && codedLetter <= 117) {
          let code = 14 + 10 * (codedLetter - 113);
          polybiusCode += code.toString();
        } else if (codedLetter >= 118 && codedLetter <= 122) {
          let code = 15 + 10 * (codedLetter - 118);
          polybiusCode += code.toString();
        } else {
          polybiusCode += " ";
        }
      }
      return polybiusCode;
    } else {
      //remove the spaces and check if there is a remainder, if there is, the number is odd
      let checkInput = input.split(" ").join("");
      if (!(checkInput.length % 2 === 0)) return false;

      //checking each number by 2
      for (let i = 0; i < input.length; i += 2) {
        let codeNum1 = `${input[i]}`;
        let codeNum2 = `${input[i + 1]}`;

        
        if (codeNum1 === " ") {
          polybiusCode += " ";
          i -= 1;
        } else if (`${codeNum1}${codeNum2}` === "42") {
          polybiusCode += "(i/j)";
        } else if (`${codeNum1}${codeNum2}` === "52") {
          polybiusCode += "k";
        } 
        
        //if the first number is 1, it will be in the first row. find the difference between the first letter and letter to be searched
        //add the charCode of the original number 
        else if (codeNum2 === "1") {
          polybiusCode += String.fromCharCode(codeNum1 - 1 + 97);
        } else if (codeNum2 === "2") {
          polybiusCode += String.fromCharCode(codeNum1 - 1 + 102);
        } else if (codeNum2 === "3") {
          polybiusCode += String.fromCharCode(codeNum1 - 1 + 108);
        } else if (codeNum2 === "4") {
          polybiusCode += String.fromCharCode(codeNum1 - 1 + 113);
        } else if (codeNum2 === "5") {
          polybiusCode += String.fromCharCode(codeNum1 - 1 + 118);
        }
      }
      return polybiusCode;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };