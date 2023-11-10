/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s) {
  let sub = "";
  let longestSubLength = 0;
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (!sub.includes(letter)) {
      sub += letter;
      if (sub.length > longestSubLength) {
        longestSubLength = sub.length;
        // console.log(`New record: ${sub.length} ${sub}`);
      }
      continue;
    }
    // Try removing all characters up to and including the first instance of `letter` in `sub`
    const oldSub = sub;
    sub = sub.substring(sub.indexOf(letter) + 1) + letter;
    // console.log(`Next letter is ${letter}, changing "${oldSub}" to "${sub}"`);
    continue;
  }

  return longestSubLength;
}
// @lc code=end

describe("lengthOfLongestSubstring", () => {
  it.each([
    {
      input: "abcabcbb",
      output: 3,
    },
    {
      input: "bbbbb",
      output: 1,
    },
    {
      input: "pwwkew",
      output: 3,
    },
  ])("should turn $input into $output", (testCase) => {
    expect(lengthOfLongestSubstring(testCase.input)).toEqual(testCase.output);
  });
});
