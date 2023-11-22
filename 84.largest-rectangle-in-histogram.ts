/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  // heights must remain in the same order
  let largestArea = 0;
  let initial = [...heights];
  while (initial.length) {
    const curr = [...initial];
    while (curr.length) {
      const min = Math.min(...curr);
      const area = min * curr.length;
      if (area > largestArea) largestArea = area;
      // console.log("curr is", curr, "area is", area);
      while (true) {
        curr.pop();
        if (curr[curr.length - 1] !== min) break;
      }
    }
    initial.shift();
  }
  return largestArea;
}
// @lc code=end

describe("largestRectangleArea", () => {
  it.each(
    [
      {
        input: [2, 1, 5, 6, 2, 3],
        output: 10,
      },
      {
        input: [2, 4],
        output: 4,
      },
      {
        input: [100],
        output: 100,
      },
      {
        input: [100, 1, 1, 1, 1, 1, 1],
        output: 100,
      },
      {
        input: Array(30000).fill(1),
        output: 30000,
      },
      {
        input: [2, 1, 5, 6, 2, 3],
        output: 10,
      },
      {
        input: [1, 2, 3, 4, 5],
        output: 9,
      },
      {
        input: [3, 6, 5, 7, 4, 8, 1, 0],
        output: 20,
      },
    ].slice(7, 8)
  )("should turn $input into $output", (testCase) => {
    expect(largestRectangleArea(testCase.input)).toEqual(testCase.output);
  });
});
