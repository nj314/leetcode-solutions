/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const freq1 = nums1.reduce<Record<number, number>>((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});
  const freq2 = nums2.reduce<Record<number, number>>((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});

  const intersection = Object.entries(freq1).reduce<number[]>((prev, curr) => {
    const n = Number(curr[0]);
    const n_freq1 = curr[1];
    const n_freq2 = freq2[n];
    if (!n_freq2) return prev;

    const finalFrequency = Math.min(n_freq1, n_freq2);
    return prev.concat(Array(finalFrequency).fill(n));
  }, []);

  return intersection;
}
// @lc code=end

describe("intersection", () => {
  it.each([
    {
      nums1: [1, 2, 2, 1],
      nums2: [2, 2],
      output: [2, 2],
    },
    {
      nums1: [4, 9, 5],
      nums2: [9, 4, 9, 8, 4],
      output: [4, 9],
    },
  ])("should turn $nums1 & $nums2 into $output", (testCase) => {
    const result = intersect(testCase.nums1, testCase.nums2);
    expect(result.sort()).toEqual(testCase.output.sort());
  });
});
