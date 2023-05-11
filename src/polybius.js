const polybiusModule = (function () {
  // set up a polybius grid, note that "j" occupies the same space as "i"
const grid = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "i", "k"],
  ["l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z"]
];

  function polybius(input, encode = true) {

    //return false if no input is given
    if(!input){
      return false;
    }
   //convert input to lowercase so it can be compared to grid
    input = input.toLowerCase();
    //set the output variable, this is where the modified input will go
    let output = "";

    //begin encoding
    //first, check if it is encode or decode
    if(encode){
      //if true, it means to encode the input. if false, it means decode
      //loop through the input
      for(let i = 0; i < input.length; i++){
        //set a variable for each letter of the input
        const char = input[i];
        //account for spaces in the input, then have it keep going via 'continue'
        if (char === " "){
          output += " ";
          continue;
        }
        //account for "j", that shares a position with "i"
        if (char === "j"){
          output += "42";
          continue;
        }
        //find the 'row' that the character resides in
        const rowIndex = grid.findIndex(row => row.includes(char));
        //find the 'column' that the character resides in
        const colIndex = grid[rowIndex].indexOf(char);
        // add the indexed row and column to the output as a pair of numbers in the form of a string, using '+1' to counter that index starts at zero
        output += (colIndex + 1).toString() + (rowIndex + 1).toString();
      }
    }
    //
    // use an 'else' statement for decoding
   else {
       //set up a counter to check if the length of all numbers to be decoded is odd
       let counter = 0;
          for (let i = 0; i < input.length; i++) {
              if (input[i] !== " ") {
                  counter++
              }
          }
          // use remainder to see if the counter is even or odd
          if (counter % 2 !== 0) {
              return false;
          }
    // loop through the input two characters at a time, since each letter corresponds to a two digit integer
    for (let i = 0; i < input.length; i += 2) {
      //columns
      const num1 = input[i];
      //rows
      const num2 = input[i + 1];
      // account for spaces in the input
      if (num1 === " ") {
        output += " ";
        // decrement i to account for the skipped character
        i--; 
        continue;
      }
      // convert the pair of numbers to the corresponding row and column indices
      const rowIndex = parseInt(num2) - 1;
      const colIndex = parseInt(num1) - 1;
      // find the character at the specified row and column on the grid
      const char = grid[rowIndex][colIndex];
      // account for "i" and "j" being interchangeable
      if (char === "i" || char === "j") {
        output += "(i/j)";
      } else {
        output += char;
      }
    }
  }
    //return the final output
    return output;

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
