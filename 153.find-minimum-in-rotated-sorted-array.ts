/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {
  let min = 0,
    max = nums.length - 1;
  let answer: number | null = null;
  let attempts = 0,
    MAX_ATTEMPTS = 100;
  while (min < max && attempts++ < MAX_ATTEMPTS) {
    const i = Math.floor((max + min) / 2);
    // console.log(
    //   `min: ${min}(${nums[min]}), i: ${i}(${nums[i]}), max: ${max}(${nums[max]}), answer: ${answer}`
    // );
    const currentNums = [nums[min], nums[i], nums[max]];
    const minFound = Math.min(...currentNums);
    const maxFound = Math.max(...currentNums);
    if (answer === null || minFound < answer) answer = minFound;
    if (nums[min] === minFound && nums[max] === maxFound) break;
    if (
      (nums[min] === minFound && nums[i] === maxFound) ||
      (nums[min] === maxFound && nums[i] === minFound)
    ) {
      max = i - 1;
    } else if (
      (nums[i] === maxFound && nums[max] === minFound) ||
      (nums[i] === minFound && nums[max] === maxFound)
    ) {
      min = i + 1;
    }
  }
  if (attempts >= MAX_ATTEMPTS) throw new Error("Limit exceeded");
  if (answer === null) return nums[0];
  return answer;
}
// @lc code=end

describe("findMin", () => {
  it.each(
    [
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
      {
        input: [1],
        output: 1,
      },
      {
        input: [3, 1, 2],
        output: 1,
      },
      {
        input: [2, 3, 4, 5, 1],
        output: 1,
      },
    ].slice(0)
  )("should turn $input into $output", (testCase) => {
    expect(findMin(testCase.input)).toEqual(testCase.output);
  });
});
