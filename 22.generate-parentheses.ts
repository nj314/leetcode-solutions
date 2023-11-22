/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const answer: string[] = [];
  if (n === 0) {
    // console.log('n: 0, answer: [""]');
    return [""];
  }
  for (let leftCount = n - 1; leftCount >= 0; leftCount--) {
    for (const leftStr of generateParenthesis(leftCount)) {
      for (const rightStr of generateParenthesis(n - leftCount - 1)) {
        answer.push(`(${leftStr})${rightStr}`);
      }
    }
  }
  // console.log(`n: ${n}, answer: ${answer}`);
  return answer;
}
// @lc code=end

describe("generateParenthesis", () => {
  it.each(
    [
      {
        input: 3,
        output: ["((()))", "(()())", "(())()", "()(())", "()()()"],
      },
      {
        input: 1,
        output: ["()"],
      },
    ].slice(0, 1)
  )("should turn $input into $output", (testCase) => {
    expect(generateParenthesis(testCase.input)).toEqual(testCase.output);
  });
});
