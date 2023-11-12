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

  function addLettersForDigit(digit: string, current: string) {
    if (!digit) return [];
    const letters = mapping[digit];
    const results = letters.map((l) => l + current);
    return results;
  }

  let results: string[] = addLettersForDigit(digits[digits.length - 1], "");
  for (let i = digits.length - 2; i >= 0; i--) {
    results = results.flatMap((r) => addLettersForDigit(digits[i], r));
    console.log("results: ", results);
  }
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
