/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  // Input array is sorted, so we can use the two-pointer method
  let i = 0,
    j = numbers.length - 1;
  while (i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i + 1, j + 1];
    } else if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    }
  }
  throw new Error("No solution found");
}
// @lc code=end

describe.only("twoSum II", () => {
  it.each([
    {
      nums: [2, 7, 11, 15],
      target: 9,
      output: [1, 2],
    },
    {
      nums: [2, 3, 4],
      target: 6,
      output: [1, 3],
    },
    {
      nums: [-1, 0],
      target: -1,
      output: [1, 2],
    },
  ])("should find a sum of $target in $nums as: $output", (testCase) => {
    expect(twoSum(testCase.nums, testCase.target)).toEqual(testCase.output);
  });
});
