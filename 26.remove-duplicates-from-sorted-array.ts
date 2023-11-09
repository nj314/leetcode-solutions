/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let i = 0,
    previousValue = null;

  while (i < nums.length) {
    const value = nums[i];
    if (value === previousValue) {
      nums.splice(i, 1);
      continue; // keep the same index
    }

    previousValue = value;
    i++;
  }

  return nums.length;
}
// @lc code=end

describe("removeDuplicates", () => {
  it.each([
    { nums: [1, 1, 2], expectedNums: [1, 2] },
    {
      nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      expectedNums: [0, 1, 2, 3, 4],
    },
  ])("should return $expectedNums.length for $nums", (testCase) => {
    const k = removeDuplicates(testCase.nums);
    expect(k).toEqual(testCase.expectedNums.length);
    console.log("nums are now", testCase.nums);

    // Verify in-place sort
    expect(testCase.nums.slice(0, k)).toEqual(
      testCase.expectedNums.slice(0, k)
    );
  });
});
