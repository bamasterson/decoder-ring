const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar()", ()=>{
    it("should return false if shift is undefined", ()=>{
        const expected = false;
        const shift = undefined;
        const actual = caesar("PiZzA", shift, true);
        expect(expected).to.equal(actual);
    })
    it("should return false if shift is 0", ()=>{
        const expected = false;
        const shift = 0;
        const actual = caesar("PiZzA", shift, true);
        expect(expected).to.equal(actual);
    })
    it("should return false if shift is less than -25", ()=>{
        const expected = false;
        const shift = -30;
        const actual = caesar("PiZzA", shift, true);
        expect(expected).to.equal(actual);
    })
    it("should return false if shift is greater than 25", ()=>{
        const expected = false;
        const shift = 30;
        const actual = caesar("PiZzA", shift, true);
        expect(expected).to.equal(actual);
    })
    it("should ignore capital letters", ()=>{
        const expected = "slccd";
        const actual = caesar("PiZzA", 3);
        expect(expected).to.equal(actual);
    })
    it("should wrap around to the front of the alphabet", ()=>{
        const expected = "slccd";
        const actual = caesar("pizza", 3);
        expect(expected).to.equal(actual);
    })
    it("should wrap around to the end of the alphabet", ()=> {
        const expected = "yxq";
        const actual = caesar("bat", -3);
        expect(expected).to.equal(actual);
    })
    it("should skip over spaces and special characters", ()=>{
        const expected = "slccd! edw?";
        const actual = caesar("pizza! bat?", 3);
        expect(expected).to.equal(actual);
    })
})