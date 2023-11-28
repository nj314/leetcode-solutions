/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  if (height.length <= 1) return 0;
  let max = 0;
  const localMaxima: number[] = [0];
  for (let i = 1; i < height.length; i++) {
    //console.log(`\ni = ${i}, height = ${height[i]}`);
    const stack = [...localMaxima];
    while (stack.length) {
      const j = stack.pop() as number;
      //console.log(`j = ${j}, height = ${height[j]}`);
      const h = Math.min(height[i], height[j]);
      const w = i - j;
      const area = h * w;
      //console.log(`${w} * ${h} = ${area}`);
      if (area > max) {
        max = area;
        //console.log("New max area: ", max);
      }
    }

    if (height[i] > height[i - 1]) {
      //console.log(`Local maximum at index ${i}, height ${height[i]}`);
      localMaxima.push(i);
    }
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
