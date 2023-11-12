/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(unsortedNums: number[]): number[][] {
  const results: number[][] = [];
  const nums = [...unsortedNums].sort((a, b) => a - b);
  // console.log("sorted: ", nums);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue; // skip duplicate i values
    let j = i + 1,
      k = nums.length - 1;

    while (j < k) {
      // console.log("indices ", i, j, k);
      const sum = nums[i] + nums[j] + nums[k];
      // console.log(`trying ${nums[i]} + ${nums[j]} + ${nums[k]} = ${sum}`);
      if (sum === 0) {
        // console.log("success");
        results.push([nums[i], nums[j], nums[k]]);
        j++, k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        continue;
      } else if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
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
    {
      input: [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4],
      output: [
        [-4, 0, 4],
        [-4, 1, 3],
        [-3, -1, 4],
        [-3, 0, 3],
        [-3, 1, 2],
        [-2, -1, 3],
        [-2, 0, 2],
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
  ])("should turn $input into $output", (testCase) => {
    const results = threeSum(testCase.input).sort((a, b) => a[0] - b[0]);
    results.forEach((triplet) => triplet.sort((a, b) => a - b));
    expect(results).toEqual(testCase.output);
  });
});
