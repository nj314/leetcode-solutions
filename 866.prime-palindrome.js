/*
 * @lc app=leetcode id=866 lang=javascript
 *
 * [866] Prime Palindrome
 */

// @lc code=start
function primePalindrome(n) {
  function isPrime(n) {
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  if (n <= 11) {
    for (let i = n; i < 10; i++) {
      if (isPrime(i)) return i;
    }
    return 11;
  }

  // Check for even-digit palindromes
  for (let leftHalf = 1; leftHalf < Math.pow(10, 4); leftHalf++) {
    let N = leftHalf.toString();
    let rightHalf = "";
    for (let i = N.length - 1; i >= 0; i--) {
      rightHalf = `${rightHalf}${N[i]}`;
    }
    const candidate = Number(`${leftHalf}${rightHalf}`);
    if (candidate > n && isPrime(candidate)) return candidate;

    // Check for odd-digit palindromes
    N = leftHalf.toString();
    for (let middleDigit = 0; middleDigit <= 9; middleDigit++) {
      const candidate = Number(`${leftHalf}${middleDigit}${rightHalf}`);
      if (candidate > n && isPrime(candidate)) return candidate;
    }
  }
  throw new Error("Invalid");
}
// @lc code=end

describe("primePalindrome", () => {
  it.each([
    {
      input: 6,
      output: 7,
    },
    {
      input: 8,
      output: 11,
    },
    {
      input: 11,
      output: 11,
    },
    {
      input: 13,
      output: 101,
    },
    {
      input: 1,
      output: 2,
    },
    {
      input: 3991994,
      output: 3994993,
    },
    {
      input: 31880255,
      output: 100030001, // ugh this case is too slow to pass on LC
    },
  ])("should turn $input into $output", (testCase) => {
    expect(primePalindrome(testCase.input)).toEqual(testCase.output);
  });
});
