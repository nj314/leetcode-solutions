/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  return nums.map((n, i) => {
    return nums.reduce((prev, curr, j) => (i === j ? prev : prev * curr), 1);
  });
}
// @lc code=end
