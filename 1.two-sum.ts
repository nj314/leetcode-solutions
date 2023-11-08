/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
export function twoSum(nums: number[], target: number): number[] {
  for (let i1 = 0; i1 < nums.length; i1++) {
    for (let i2 = i1 + 1; i2 < nums.length; i2++) {
      if (nums[i1] + nums[i2] === target) return [i1, i2];
    }
  }
  throw new Error("Did not find a solution. This should not occur.");
}
// @lc code=end

describe("twoSum", () => {
  it.each([
    {
      nums: [2, 7, 11, 15],
      target: 9,
      solution: [0, 1],
    },
    {
      nums: [3, 2, 4],
      target: 6,
      solution: [1, 2],
    },
    {
      nums: [3, 3],
      target: 6,
      solution: [0, 1],
    },
  ])(
    "sums $nums with target $target = $solution",
    ({ nums, target, solution }) => {
      expect(twoSum(nums, target)).toEqual(solution);
    }
  );
});
