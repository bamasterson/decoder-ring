const substitutionModule = (function () {

  //global variables
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipher = [];

  function substitution(input, alphabet, encode = true) {

    //make a new set using the inputted alphabet. this will remove duplicates
    const removeRepeats = new Set(alphabet);

    // return false if no input or alphabet, or if alphabet is not exactly 26 characters after removing repeats
    if(!input || !alphabet) return false;
    if(alphabet.length !== 26 || [...removeRepeats].length <26) return false;

    //set local variables and split the alphabet argument into an array
    const inputCasing = input.toLowerCase();
    alphabet.split("");

    //encode
    if (encode){
      for (let i = 0; i< 26; i++){
        // converts the input by setting the standard alphabet to the encoded alphabet
        cipher[standardAlphabet[i]] = alphabet[i];
      }
    } else /* decode */ {
      for (let i = 0; i < 26; i++){
        //converts the input by setting the encoded alphabet to the standard alphabet
        cipher[alphabet[i]] = standardAlphabet[i];
      }
    }// combine the encode or decode, and account for spacing
    let result = inputCasing.split("").map((letter)=>{
      if (letter === " ") return " ";
      return cipher[letter];
    })
    //return the final output
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
