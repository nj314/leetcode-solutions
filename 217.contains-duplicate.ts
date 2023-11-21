/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const set = new Set(nums);
  return set.size !== nums.length;
}
// @lc code=end

describe("containsDuplicate", () => {
  it.each([
    {
      input: [1, 2, 3, 1],
      output: true,
    },
    {
      input: [1, 2, 3, 4],
      output: false,
    },
    {
      input: [1, 1, 1, 3, 3, 4, 3, 2, 4],
      output: true,
    },
  ])("should turn $input into $output", (testCase) => {
    expect(containsDuplicate(testCase.input)).toEqual(testCase.output);
  });
});
