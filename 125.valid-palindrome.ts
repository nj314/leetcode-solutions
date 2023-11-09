/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const sanitized = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = sanitized.split("").reverse().join("");
  return reversed === sanitized;
}
// @lc code=end

describe("isPalindrome", () => {
  it.each([
    {
      input: "A man, a plan, a canal: Panama",
      output: true,
    },
    {
      input: "race a car",
      output: false,
    },
    {
      input: " ",
      output: true,
    },
    {
      input: "0P",
      output: false,
    },
  ])("should turn $input into $output", (testCase) => {
    expect(isPalindrome(testCase.input)).toEqual(testCase.output);
  });
});
