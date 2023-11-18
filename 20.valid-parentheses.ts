/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const expected = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    switch (char) {
      case "(":
        expected.push(")");
        break;
      case "{":
        expected.push("}");
        break;
      case "[":
        expected.push("]");
        break;
      case ")":
      case "}":
      case "]":
        if (expected.pop() !== char) return false;
        break;
      default:
        throw new Error(`Unexpected character: ${char}`);
    }
  }
  return expected.length === 0;
}
// @lc code=end

describe("isValid", () => {
  it.each([
    {
      input: "()",
      output: true,
    },
    {
      input: "()[]{}",
      output: true,
    },
    {
      input: "(]",
      output: false,
    },
  ])("should turn $input into $output", (testCase) => {
    expect(isValid(testCase.input)).toEqual(testCase.output);
  });
});
