// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution function", () => {
    describe("encoding", () => {
        it("should return false if the given alphabet isn't exactly 26 characters long", () => {
            let actual = substitution("You shall not pass", "#zert$uioaqsdfghj(l");
    
            expect(actual).to.be.false;
        })
    
        it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
            let actual = substitution("You shall not pass", "#zert$uioaqsdfghj(lmwxcvbn");
            let expected = "bgw li#ss fgm h#ll";
    
            expect(actual).to.equal(expected);
        })
    
        it("should return false if there are any duplicate characters in the given alphabet", () => {
            let actual = substitution("You shall not pass", "#zert$uioaqsdfghj(lmwxcvbb");
    
            expect(actual).to.be.false;
        })
    
        it("should maintain spaces", () => {
            let actual = substitution("You shall not pass", "#zert$uioaqsdfghj(lmwxcvbn");
            let expected = "bgw li#ss fgm h#ll";
    
            expect(actual).to.equal(expected);
        })
    
        it("should ignore capital letters", () => {
            let actual = substitution("You shall not pass", "#zert$uioaqsdfghj(lmwxcvbn");
            let expected = "bgw li#ss fgm h#ll";
    
            expect(actual).to.equal(expected);
        })
    })
    describe("decoding", () => {
        it("should return false if the given alphabet isn't exactly 26 characters long", () => {
            let actual = substitution("bgw li#ss fgm h#ll", "#zert$uioaqsdfghj(l", false);
    
            expect(actual).to.be.false;
        })
    
        it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
            let actual = substitution("bgw li#ss fgm h#ll", "#zert$uioaqsdfghj(lmwxcvbn", false);
            let expected = "you shall not pass";
    
            expect(actual).to.equal(expected);
        })
    
        it("should return false if there are any duplicate characters in the given alphabet", () => {
            let actual = substitution("bgw li#ss fgm h#ll", "#zert$uioaqsdfghj(lmwxcvbb", false);
    
            expect(actual).to.be.false;
        })
    
        it("should maintain spaces", () => {
            let actual = substitution("bgw li#ss fgm h#ll", "#zert$uioaqsdfghj(lmwxcvbn", false);
            let expected = "you shall not pass";
    
            expect(actual).to.equal(expected);
        })
    
        it("should ignore capital letters", () => {
            let actual = substitution("bgw li#ss fgm h#ll", "#zert$uioaqsdfghj(lmwxcvbn", false);
            let expected = "you shall not pass";
    
            expect(actual).to.equal(expected);
        })
    })
});