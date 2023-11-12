/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const mapping: Record<string, string[]> = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  function addRecursive(remainingDigits: string) {
    if (!remainingDigits.length) return [];
    let results: string[] = [];
    const digit = remainingDigits[0];
    const letters = mapping[digit];
    let subsequentCombinations: string[] = addRecursive(
      remainingDigits.slice(1)
    );
    if (!subsequentCombinations.length) subsequentCombinations = [""];
    letters.forEach((letter) => {
      results = results.concat(subsequentCombinations.map((c) => letter + c));
    });
    return results;
  }

  const results = addRecursive(digits);

  return results;
}
// @lc code=end

describe("letterCombinations", () => {
  it.each([
    {
      input: "23",
      output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    },
    {
      input: "",
      output: [],
    },
    {
      input: "2",
      output: ["a", "b", "c"],
    },
  ])("should turn $input into $output", (testCase) => {
    expect(letterCombinations(testCase.input).sort()).toEqual(testCase.output);
  });
});
