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
    let j = i + 1,
      k = nums.length - 1;

    while (j !== k && k > i) {
      // console.log("indices ", i, j, k);
      const sum = nums[i] + nums[j] + nums[k];
      // console.log(`trying ${nums[i]} + ${nums[j]} + ${nums[k]} = ${sum}`);
      if (sum === 0) {
        // console.log("success");
        const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
        if (
          !results.some(
            (r) =>
              r[0] === triplet[0] && r[1] === triplet[1] && r[2] === triplet[2]
          )
        ) {
          results.push(triplet);
        }
        if (j < i - 1) {
          j++;
        } else {
          k--;
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
  it.each(
    [
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
    ].slice(3, 4)
  )("should turn $input into $output", (testCase) => {
    const results = threeSum(testCase.input);
    testCase.output.forEach((result) => {
      expect(results).toContainEqual(result);
    });
    expect(results).toHaveLength(testCase.output.length);
  });
});
