/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let min = 0,
    max = nums.length - 1,
    attempts = 0,
    MAX_ATTEMPTS = 100;

  if (min >= max) return nums[0] === target ? 0 : -1; // length 1
  while (min < max) {
    const mid = Math.floor((max + min) / 2);
    if (nums[min] === target) return min;
    if (nums[mid] === target) return mid;
    if (nums[max] === target) return max;

    // console.log(
    //   `min: ${min}_${nums[min]} mid: ${mid}_${nums[mid]} max: ${max}_${nums[max]}`
    // );

    if (
      (nums[min] > nums[mid] && (target < nums[mid] || target > nums[min])) || // inflection point
      (nums[min] < target && target < nums[mid]) // no inflection point
    ) {
      // Target is left of mid.
      max = mid - 1;
    } else if (
      (nums[mid] < target && target < nums[max]) || // no inflection point
      (nums[mid] > nums[max] && (target > nums[mid] || target < nums[max])) // inflection point
    ) {
      // Target is right of mid.
      min = mid + 1;
    } else {
      return -1;
    }
    if (attempts++ > MAX_ATTEMPTS) throw new Error("Limit exceeded");
  }

  return -1;
}
// @lc code=end

describe("search", () => {
  it.each(
    [
      {
        input: [4, 5, 6, 7, 0, 1, 2],
        target: 0,
        output: 4,
      },
      {
        input: [4, 5, 6, 7, 0, 1, 2],
        target: 3,
        output: -1,
      },
      {
        input: [1],
        target: 0,
        output: -1,
      },
      {
        input: [1],
        target: 1,
        output: 0,
      },
      {
        input: [4, 5, 6, 7, 8, 9],
        target: 5,
        output: 1,
      },
      {
        input: [1, 2, 3, 4, 5, 6],
        target: 4,
        output: 3,
      },
      {
        input: [8, 1, 2, 3, 4, 5, 6, 7],
        target: 6,
        output: 6,
      },
      {
        input: [4, 5, 6, 7, 8, 1, 2, 3],
        target: 8,
        output: 4,
      },
    ].slice(0)
  )("should turn $input, target = $target into $output", (testCase) => {
    expect(search(testCase.input, testCase.target)).toEqual(testCase.output);
  });
});
