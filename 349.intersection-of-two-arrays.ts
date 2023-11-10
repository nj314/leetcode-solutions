/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const combined = [...set1].filter((n) => set2.has(n));
  return combined;
}
// @lc code=end

describe("intersection", () => {
  it.each([
    {
      nums1: [1, 2, 2, 1],
      nums2: [2, 2],
      output: [2],
    },
    {
      nums1: [4, 9, 5],
      nums2: [9, 4, 9, 8, 4],
      output: [9, 4],
    },
  ])("should turn $nums1 & $nums2 into $output", (testCase) => {
    const result = intersection(testCase.nums1, testCase.nums2);
    expect(result).toHaveLength(testCase.output.length);
    testCase.output.forEach((n) => {
      expect(result).toContain(n);
    });
  });
});
