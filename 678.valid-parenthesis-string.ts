/*
 * @lc app=leetcode id=678 lang=typescript
 *
 * [678] Valid Parenthesis String
 */

// @lc code=start
function checkValidString(s: string): boolean {
  const open: number[] = [];
  const asterisks: number[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    switch (char) {
      case "(":
        open.push(i);
        break;
      case "*":
        asterisks.push(i);
        break;
      case ")":
        if (open.length < 1) {
          if (!asterisks.length) {
            // console.log("Found a closing without a possible opening");
            return false;
          } else {
            // console.log("Consuming an asterisk as an open paren");
            asterisks.shift();
            continue;
          }
        }
        open.pop();
        break;
      default:
        throw new Error(`unexpected char: ${char}`);
    }
  }
  // console.log("Reached the end, open is ", open);
  for (let i = 0; i < open.length; i++) {
    // console.log("asterisks are ", asterisks);
    if (asterisks.length === 0) {
      // console.log("out of asterisks!");
      return false;
    }
    const asteriskIndex = asterisks.findIndex((a) => a > open[i]);
    if (asteriskIndex === -1) {
      // console.log(`out of asterisks after ${open[i]}!`);
      return false;
    } else {
      asterisks.splice(asteriskIndex, 1);
    }
  }
  return true;
}
// @lc code=end

describe("checkValidString", () => {
  it.each(
    [
      {
        input: "()",
        output: true,
      },
      {
        input: "(*)",
        output: true,
      },
      {
        input: "(*))",
        output: true,
      },
      {
        input:
          "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()",
        output: true,
      },
      {
        input:
          "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())",
        output: false,
      },
      {
        input: "*(",
        output: false,
      },
      {
        input:
          "()(())(((((()())(()))))()(*()))()()()()((()(())())*((((())))*())()(()()))*((()(()(()))))(()())(*(*",
        output: true,
      },
    ].slice()
  )("should turn $input into $output", (testCase) => {
    expect(checkValidString(testCase.input)).toEqual(testCase.output);
  });
});
