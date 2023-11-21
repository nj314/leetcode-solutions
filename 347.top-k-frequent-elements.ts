/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const map = nums.reduce<Record<number, number>>((prev, curr) => {
    prev[curr] = (prev[curr] ?? 0) + 1;
    return prev;
  }, {});
  const frequencies = Object.values(map)
    .sort((a, b) => b - a)
    .slice(0, k);
  // console.log(frequencies);
  const result = Object.entries(map)
    .filter(([num, freq]) => frequencies.includes(freq))
    .map((entry) => Number(entry[0]));
  // console.log(result);
  return result;
}
// @lc code=end
