/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
  if (!nums.length) return -1;
  if (nums.length === 1) {
    if (nums[0] === target) return 0;
    return -1;
  }
  let min = 0,
    attempts = 0,
    max = nums.length - 1;
  while (attempts++ < 100) {
    // while (true) {
    const i = Math.floor((min + max) / 2);
    // console.log(`min ${min}, i = ${i}, max = ${max}`);
    if (nums[i] === target) return i;
    if (max < min) return -1;
    if (nums[i] > target) {
      max = i - 1;
    } else if (nums[i] < target) {
      min = i + 1;
    }
  }
  throw new Error("Max attempts exceeded");
}
// @lc code=end

describe("search", () => {
  it.each(
    [
      {
        nums: [-1, 0, 3, 5, 9, 12],
        target: 9,
        output: 4,
      },
      {
        nums: [-1, 0, 3, 5, 9, 12],
        target: 2,
        output: -1,
      },
      {
        nums: [5],
        target: 5,
        output: 0,
      },
      {
        nums: [2, 5],
        target: 5,
        output: 1,
      },
      {
        nums: [2, 5],
        target: 0,
        output: -1,
      },
    ].slice(0)
  )("should turn $nums, target = $target into $output", (testCase) => {
    expect(search(testCase.nums, testCase.target)).toEqual(testCase.output);
  });
});
