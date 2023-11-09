/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let prev = null;
  let prevCount = 0;
  let i = 0;
  while (i < nums.length) {
    const value = nums[i];
    if (value === prev) {
      prevCount++;
      if (prevCount > 2) {
        nums.splice(i, 1);
        continue;
      }
    } else {
      // Unique value found
      prevCount = 1;
      prev = value;
    }
    i++;
  }

  return nums.length;
}
// @lc code=end

describe("removeDuplicates II", () => {
  it.each([
    {
      nums: [1, 1, 1, 2, 2, 3],
      expectedNums: [1, 1, 2, 2, 3],
    },
    {
      nums: [0, 0, 1, 1, 1, 1, 2, 3, 3],
      expectedNums: [0, 0, 1, 1, 2, 3, 3],
    },
  ])("should return $expectedNums.length for $nums", (testCase) => {
    const k = removeDuplicates(testCase.nums);
    console.log("nums are now", testCase.nums);
    expect(k).toEqual(testCase.expectedNums.length);

    // Verify in-place sort
    expect(testCase.nums.slice(0, k)).toEqual(
      testCase.expectedNums.slice(0, k)
    );
  });
});
