/*
 * @lc app=leetcode id=535 lang=typescript
 *
 * [535] Encode and Decode TinyURL
 */

// @lc code=start

const map = new Map();
let i = 0;
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  map.set(i, longUrl);
  return (i++).toString();
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(i: string): string {
  return map.get(Number(i));
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// @lc code=end

describe("encode and decode", () => {
  it.each([
    {
      input: "https://leetcode.com/problems/design-tinyurl",
    },
  ])("should encode & decode $input ", (testCase) => {
    expect(decode(encode(testCase.input))).toEqual(testCase.input);
  });
});
