/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {}
// @lc code=end

describe("letterCombinations", () => {
  it.each([
    {
      input: "23",
      output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    },
    {
      input: "",
      output: [],
    },
    {
      input: "2",
      output: ["a", "b", "c"],
    },
  ])("should turn $input into $output", (testCase) => {
    expect(letterCombinations(testCase.input)).toEqual(testCase.output);
  });
});
