/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let max = 0;

  for (let start = 0; start < prices.length - 1; start++) {
    for (let end = start + 1; end < prices.length; end++) {
      const priceDiff = prices[end] - prices[start];
      if (priceDiff > 0) max = Math.max(max, priceDiff);
    }
  }

  return max;
}
// @lc code=end

describe("maxProfit", () => {
  it.each([
    {
      input: [7, 1, 5, 3, 6, 4],
      output: 5,
    },
    {
      input: [7, 6, 4, 3, 1],
      output: 0,
    },
  ])("should turn $input into $output", (testCase) => {
    expect(maxProfit(testCase.input)).toEqual(testCase.output);
  });
});
