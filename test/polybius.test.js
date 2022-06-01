// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius function", () => {
  describe("encoding", () => {
    it("should translate i and j to 42", () => {
      let actual = polybius("jim is happy");
      let expected = "424223 4234 3211535345";

      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      let actual = polybius("Jim is happy");
      let expected = "424223 4234 3211535345";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message before encoding", () => {
      let actual = polybius("oMg How Are YoU");
      let expected = "432322 324325 112451 454354";

      expect(actual).to.equal(expected);
    });
    it("should return an error if there are any unknown characters", () => {
      let actual = polybius("おはようございます");
      let expected = "Please input normal characters.";
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding", () => {
    it("should decode 42 to (i/j)", () => {
      let actual = polybius("42 13431551 314341423322 3443 23543132", false);
      let expected = "(i/j) love cod(i/j)ng so much";

      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message after decoding", () => {
      let actual = polybius("432322 324325 112451 454354", false);
      let expected = "omg how are you";

      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      let actual = polybius("424223 4234 3211535345", false);
      let expected = "(i/j)(i/j)m (i/j)s happy";

      expect(actual).to.equal(expected);
    });
  });
});
