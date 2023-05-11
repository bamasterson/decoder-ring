const caesarModule = (function () {
  // set up the initial alphabet to be referenced throughout the function
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    // If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
    if(shift ===undefined || shift === 0 || shift < -25 || shift >25){
      return false;
    }
    //set the result to an empty string that can be added to, it will eventually be the final output
    let result = "";
    // if encode is false, that means we need to decode, which requires reversing the shift
    if(encode === false){
      shift = shift * -1;
    }
    //loop through the input string
    for(let i =0; i < input.length; i++){
      //the function needs to disregard casing
      const letter = input[i].toLowerCase();
      //check the indexed letter against the alphabet
      if (alphabet.includes(letter)){
        //set up the shift in the index
        const alphaIndex = alphabet.indexOf(letter);
        let shiftedIndex = alphaIndex + shift;
        //account for "shift wrap" for either direction
        if (shiftedIndex > 25){
          shiftedIndex += -26;
        }
        if (shiftedIndex < 0 && shiftedIndex > -25){
          shiftedIndex += 26;
        }
        //find the new shifted letter and add it to the result
        const shiftedLetter = alphabet[shiftedIndex];
        result += shiftedLetter;
      }
      // add all non-shifting items, like special characters or spaces
      else {
        result += letter;
      }
    }
    //return the final output
    return result;

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
