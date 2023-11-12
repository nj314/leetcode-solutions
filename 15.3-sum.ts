/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const results: number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // console.log("Checking", i);
    for (let j = i + 1; j < nums.length - 1; j++) {
      // console.log("Checking", i, j);
      for (let k = j + 1; k < nums.length; k++) {
        // console.log("Checking", i, j, k);
        if (nums[i] + nums[j] + nums[k] === 0) {
          const result = [nums[i], nums[j], nums[k]].sort();
          if (
            !results.some(
              (r) =>
                r[0] === result[0] && r[1] === result[1] && r[2] === result[2]
            )
          ) {
            results.push(result);
            // console.log("New result: ", results[results.length - 1]);
          }
        }
      }
    }
  }
  return results;
}
// @lc code=end

describe("threeSum", () => {
  it.each([
    {
      input: [-1, 0, 1, 2, -1, -4],
      output: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    {
      input: [0, 1, 1],
      output: [],
    },
    {
      input: [0, 0, 0],
      output: [[0, 0, 0]],
    },
  ])("should turn $input into $output", (testCase) => {
    const results = threeSum(testCase.input);
    expect(results).toHaveLength(testCase.output.length);
    results.forEach((result) => {
      expect(testCase.output).toContainEqual(result);
    });
  });
});
