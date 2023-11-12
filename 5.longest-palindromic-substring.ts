/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length === 1) return s;
  let longest = "";

  function tryFindPalindrome(right: number, i: number) {
    for (let left = i; left >= 0 && right <= s.length - 1; left--, right++) {
      // console.log("trying", s.slice(left, right + 1), right - left + 1);
      if (s[left] === s[right]) {
        // console.log("yep!");
        const length = right - left + 1;
        // console.log("length is", length);
        if (length > longest.length) {
          longest = s.slice(left, right + 1);
          // console.log("Longest is now", length, longest);
        }
      } else {
        // console.log("nope!");
        break;
      }
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 2]) {
      tryFindPalindrome(i + 2, i);
    }
    if (s[i] === s[i + 1]) {
      tryFindPalindrome(i + 1, i);
    }
  }
  return longest || s[0];
}
// @lc code=end

describe("longestPalindrome", () => {
  it.each(
    [
      {
        input: "babad",
        output: "bab",
      },
      {
        input: "cbbd",
        output: "bb",
      },
      {
        input: "a",
        output: "a",
      },
      {
        input: "ac",
        output: "a",
      },
      {
        input: "ccc",
        output: "ccc",
      },
      {
        input: "xaabacxcabaaxcabaax",
        output: "xaabacxcabaax",
      },
    ].slice(5, 6)
  )("should turn $input into $output", (testCase) => {
    expect(longestPalindrome(testCase.input)).toEqual(testCase.output);
  });
});
