/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const indices: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    indices[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const complimentValue = target - nums[i];
    const complimentIndex = indices[complimentValue];
    if (i !== complimentIndex && complimentIndex !== undefined)
      return [i, complimentIndex];
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
