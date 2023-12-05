/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) return nums[0];
    if (nums[i] > nums[i + 1]) {
      return nums[i + 1];
    }
  }
  return nums[0]; // all equal
}
// @lc code=end

describe("findMin", () => {
  it.each([
    {
      input: [3, 4, 5, 1, 2],
      output: 1,
    },
    {
      input: [4, 5, 6, 7, 0, 1, 2],
      output: 0,
    },
    {
      input: [11, 13, 15, 17],
      output: 11,
    },
  ])("should turn $input into $output", (testCase) => {
    expect(findMin(testCase.input)).toEqual(testCase.output);
  });
});
