/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  if (heights.length === 1) return heights[0];
  // heights must remain in the same order
  let largestArea = 0;
  const stack: number[] = [-1];
  for (let i = 0; i < heights.length; i++) {
    //console.log(`\ni = ${i}, height = ${heights[i]}`);
    const lastHeight = heights[i - 1];
    //console.log("entering while loop");
    while (
      stack[stack.length - 1] !== -1 &&
      heights[stack[stack.length - 1]] > heights[i]
    ) {
      //console.log("stack is", stack);
      //console.log("Popping from stack: index", stack[stack.length - 1]);
      const topIndex = stack.pop() as number;
      const height = heights[topIndex];
      const width = i - stack[stack.length - 1] - 1;
      //console.log("Height is", height, "width is", width);
      const area = height * width;
      if (area > largestArea) {
        //console.log("New max: ", area);
        largestArea = area;
      }
    }
    //console.log(`Exited while loop.`);
    // //console.log(
    //   `${heights[stack[stack.length - 1]]} > ${heights[i]} === false`
    // );
    //console.log(`Pushing ${i}`);
    stack.push(i);
  }

  //console.log("handling final index");
  while (stack[stack.length - 1] !== -1) {
    const topIndex = stack.pop() as number;
    const height = heights[topIndex];
    const width = heights.length - stack[stack.length - 1] - 1;
    //console.log("Height is", height, "width is", width);
    const area = height * width;
    if (area > largestArea) {
      //console.log("New max: ", area);
      largestArea = area;
    }
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
    ].slice(0)
  )("should turn $input into $output", (testCase) => {
    expect(largestRectangleArea(testCase.input)).toEqual(testCase.output);
  });
});
