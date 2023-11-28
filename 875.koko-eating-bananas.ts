/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  let totalCount = Math.ceil(piles.reduce((sum, curr) => sum + curr, 0));
  // console.log("Total count is", totalCount);
  let min = Math.ceil(totalCount / h);
  let max = Math.max(...piles);
  while (min <= max) {
    // let attempts = 0;
    // while (attempts++ < 10 && min <= max) {
    let k = Math.floor((max + min) / 2);
    // console.log(`Trying min = ${min}, k = ${k}, max = ${max}`);
    const time = piles.reduce((sum, curr) => sum + Math.ceil(curr / k), 0);
    if (time <= h) {
      // try going slower
      if (max === k) {
        // console.log("success by k", k);
        return k;
      }
      max = k;
    }
    if (time > h) {
      // try going faster
      if (max - min === 1) {
        return max;
      } else {
        min = k;
      }
    }
  }
  throw new Error("Exceeded max retries");
}
// @lc code=end

describe("minEatingSpeed", () => {
  it.each(
    [
      {
        piles: [3, 6, 7, 11],
        h: 8,
        output: 4,
      },
      {
        piles: [30, 11, 23, 4, 20],
        h: 5,
        output: 30,
      },
    ].slice(0, 2)
  )("should turn $piles, $h into $output", (testCase) => {
    expect(minEatingSpeed(testCase.piles, testCase.h)).toEqual(testCase.output);
  });
});
