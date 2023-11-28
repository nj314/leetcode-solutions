/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  if (height.length <= 1) return 0;
  let max = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    const leftWall = height[i];
    const rightWall = height[j];
    const area = Math.min(leftWall, rightWall) * (j - i);
    if (max < area) max = area;
    if (leftWall < rightWall) i++;
    else j--;
  }

  return max;
}
// @lc code=end

describe("maxArea", () => {
  it.each(
    [
      {
        input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
        output: 49,
      },
      {
        input: [1, 1],
        output: 1,
      },
      {
        input: [1, 2, 4, 3],
        output: 4,
      },
    ].slice(0)
  )("should turn $input into $output", (testCase) => {
    expect(maxArea(testCase.input)).toEqual(testCase.output);
  });
});
