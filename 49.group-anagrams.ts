/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const result = strs.reduce<Record<string, string[]>>((prev, curr) => {
    const alphabetized = curr.split("").sort().join();
    prev[alphabetized] = (prev[alphabetized] ?? []).concat(curr);
    return prev;
  }, {});
  // console.log(result);
  return Object.values(result);
}
// @lc code=end

describe("groupAnagrams", () => {
  it.each([
    {
      input: ["eat", "tea", "tan", "ate", "nat", "bat"],
      output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      input: [""],
      output: [[""]],
    },
    {
      input: ["a"],
      output: [["a"]],
    },
  ])("should turn $input into $output", (testCase) => {
    const result = groupAnagrams(testCase.input);
    result.forEach((r) => r.sort());
    testCase.output.forEach((c) => {
      expect(result).toContainEqual(c.sort());
    });
    expect(result).toHaveLength(testCase.output.length);
  });
});
