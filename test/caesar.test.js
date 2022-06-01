// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  describe("shift values", () => {
    it("should return false if the shift value is 0", () => {
      let actual = caesar("Zebra Magazine", 0, true);
      let expected = false;

      expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is greater than 25", () => {
      let actual = caesar("Zebra Magazine", 100, true);
      let expected = false;

      expect(actual).to.equal(expected);
    });

    it("should return false if the shift value is less than -25", () => {
      let actual = caesar("Zebra Magazine", -420, true);
      let expected = false;

      expect(actual).to.equal(expected);
    });
  });

  describe("check the parameters", () => {
    it("should ignore capital letters", () => {
      let actual = caesar("Apple", 2);
      let expected = "crrng";
      expect(actual).to.equal(expected);
    });

    it("handle shifts that go past the end of the alphabet", () => {
      let actual = caesar("zoomies", 4);
      let expected = "dssqmiw";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and non alphabetic symbols before and after encoding", () => {
      let actual = caesar("Go Pikachu!", 5);
      let expected = "lt unpfhmz!";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and non alphabetic symbols before and after decoding", () => {
      let actual = caesar("lt unpfhmz!", 5, false);
      let expected = "go pikachu!";
      expect(actual).to.equal(expected);
    });


    it("should return an error if there are any unknown characters", () => {
      let actual = caesar("おはようございます", 2);
      let expected = "Please input normal characters.";
      expect(actual).to.equal(expected);
    });

  });
});
