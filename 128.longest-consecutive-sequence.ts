/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  nums = [...new Set(nums.sort((a, b) => a - b))];
  //console.log(nums);
  let lastValue = nums[0];
  let result = 1;
  let maxResult = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === lastValue + 1 || nums[i] === lastValue) {
      result++;
      maxResult = Math.max(maxResult, result);
      //console.log( `found next: ${nums[i]}, result is ${result});
      //console.log(`maxResult is ${maxResult}`);
    } else {
      //console.log(`break on ${nums[i]}`);
      maxResult = Math.max(maxResult, result);
      result = 1;
    }
    lastValue = nums[i];
  }
  return maxResult;
}
// @lc code=end

describe("longestConsecutive", () => {
  it.each([
    {
      input: [100, 4, 200, 1, 3, 2],
      output: 4,
    },
    {
      input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
      output: 9,
    },
  ])("should turn $input into $output", (testCase) => {
    expect(longestConsecutive(testCase.input)).toEqual(testCase.output);
  });
});
