# leetcode practice

## Running problems

This repo provides a high-quality editor & testing experience while working on leetcode problems.

1. Grab your editor of choice, and pull up some leetcode problems. I use a leetcode VS Code extension like [this one](https://marketplace.visualstudio.com/items?itemName=LeetCode.vscode-leetcode) to get convenient access to problems within VS Code.
2. Assuming you're using the Leetcode extension: choose a problem and click "Code Now". The extension will make a new file in the root of the repo. (Any `.ts` file in this repo will be recognized as a test file by vitest.)
3. In a terminal, run `npm test`. This will start `vitest --watch` for all problems and cache the results.
4. Edit your solution file, add a `describe` block, and add an `it.each` (or `test.each`) block inside of it.
5. Copy the test's acceptance test values into the `it.each`.

```ts
/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
export function twoSum(nums: number[], target: number): number[] {
  throw new Error("Not implemented");
}
// @lc code=end

describe("twoSum", () => {
  it.each([
    {
      nums: [2, 7, 11, 15],
      target: 9,
      solution: [0, 1],
    },
    {
      nums: [3, 2, 4],
      target: 6,
      solution: [1, 2],
    },
    {
      nums: [3, 3],
      target: 6,
      solution: [0, 1],
    },
  ])(
    "sums $nums with target $target = $solution",
    ({ nums, target, solution }) => {
      expect(twoSum(nums, target)).toEqual(solution);
    }
  );
});
```

6. Save the file. Your test should automatically run & fail in your terminal.
7. Work on your solution. When the tests pass, ~~refactor~~ pick a new problem!

Pull requests welcome!
