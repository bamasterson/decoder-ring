const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", ()=>{
    it("Should return false if there is no input argument given", () => {
        const expected = false;
        const input = "";
        const actual = substitution(input, "qwertyuiopasdfghjklzxcvbnm");
        expect(expected).to.equal(actual);
    })
    it("Should return false if there is no alphabet argument given", () => {
        const expected = false;
        const alphabet = "";
        const actual = substitution("adjkdja", alphabet);
        expect(expected).to.equal(actual);
    })
    it("Should return false if there are repeating characters in the alphabet argument", () => {
        const expected = false;
        const alphabet = "qwwertyuiopasdfghjklzxcvbn";
        const actual = substitution("afjdsjaj", alphabet);
        expect(expected).to.equal(actual);
    })
    it("Should return false if there are not exactly 26 letters in the alphabet argument", () => {
        const expected = false;
        const alphabet = "qwertyuiopasdfghjklzxcvbn";
        const actual = substitution("fjskdfjaj", alphabet);
        expect(expected).to.equal(actual);
    })
    it("Should encode a message", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(expected).to.equal(actual);
    })
    it("Should decode a message", () => {
        const expected = "thinkful";
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(expected).to.equal(actual);
    })
})