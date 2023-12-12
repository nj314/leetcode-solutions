/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let maxProfit = 0,
    minBuyPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minBuyPrice) {
      minBuyPrice = prices[i]; // use this as the new buy price instead
    } else if (prices[i] - minBuyPrice > maxProfit) {
      maxProfit = prices[i] - minBuyPrice;
    }
  }

  return maxProfit;
}
// @lc code=end

describe("maxProfit", () => {
  it.each(
    [
      {
        input: [7, 1, 5, 3, 6, 4],
        output: 5,
      },
      {
        input: [7, 6, 4, 3, 1],
        output: 0,
      },
      {
        input: [1, 2],
        output: 1,
      },
    ].slice(0)
  )("should turn $input into $output", (testCase) => {
    expect(maxProfit(testCase.input)).toEqual(testCase.output);
  });
});
