const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius()", ()=>{

    it("should return false if no input is given", ()=>{
        const input = "";
        const expected = false;
        const actual = polybius("");
        expect(expected).to.equal(actual);
    })
    
    it("should decode 'i' and 'j' interchangably", ()=>{
      const expected = "(i/j)";
      const actual = polybius("42", false);
      expect(expected).to.equal(actual);
    })
    
    it("should encode an alphabetic message to numeric", ()=>{
      const expected = "513331434151 44513444";
      const actual = polybius("encode test");
      expect(expected).to.equal(actual);
    })
    
    it("should decode a string of numbers into a message", ()=>{
      const expected = "decode test";
      const actual = polybius("415131434151 44513444", false);
      expect(expected).to.equal(actual);
    })
    
    it("should return false if an input to be decoded doesnt have an even number of digits", ()=>{
      const expected = false;
      const actual = polybius("1212121", false);
    })



})