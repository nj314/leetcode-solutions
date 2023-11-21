/*
 * @lc app=leetcode id=535 lang=typescript
 *
 * [535] Encode and Decode TinyURL
 */

// @lc code=start
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  const hashMap = longUrl
    .split("")
    .reduce<Record<string, number[]>>((prev, curr, i) => {
      const code = curr.charCodeAt(0);
      prev[code] = (prev[code] ?? []).concat(i);
      return prev;
    }, {});

  const result = Object.entries(hashMap)
    .map(([code, indices]) => `${code}:${indices.join(",")}`)
    .join("|");
  console.log("encoded to", result);
  return result;
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  const answer: string[] = [];
  shortUrl.split("|").forEach((charIndices) => {
    const [code, frequencies] = charIndices.split(":");
    const char = String.fromCharCode(Number(code));
    frequencies.split(",").forEach((f) => (answer[Number(f)] = char));
  });
  return answer.join("");
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
