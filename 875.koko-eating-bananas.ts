/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  let totalCount = Math.ceil(piles.reduce((sum, curr) => sum + curr, 0));
  // console.log("totalCount is", totalCount);
  let k = Math.ceil(totalCount / h);
  // let attempts = 0;
  // while (attempts++ < 100) {
  while (true) {
    // console.log(`Trying k = ${k}`);
    let t = 0;
    for (let i = 0; i < piles.length; i++) {
      t += Math.ceil(piles[i] / k);
    }
    // console.log("  t = ", t);
    if (t <= h) return k;
    k++;
  }
  // throw new Error("Max attempts exceeded");
}
// @lc code=end

describe("minEatingSpeed", () => {
  it.each([
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
  ])("should turn $piles, $h into $output", (testCase) => {
    expect(minEatingSpeed(testCase.piles, testCase.h)).toEqual(testCase.output);
  });
});
