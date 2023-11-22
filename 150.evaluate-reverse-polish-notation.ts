/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  function popNumbers() {
    const second = stack.pop() as number;
    const first = stack.pop() as number;
    return [first, second];
  }
  for (let i = 0; i < tokens.length; i++) {
    // console.log("stack is", stack);
    const token = tokens[i];
    switch (token) {
      case "+": {
        const [a, b] = popNumbers();
        stack.push(a + b);
        break;
      }
      case "-": {
        const [a, b] = popNumbers();
        stack.push(a - b);
        break;
      }
      case "*": {
        const [a, b] = popNumbers();
        stack.push(a * b);
        break;
      }
      case "/": {
        const [a, b] = popNumbers();
        stack.push(Number.parseInt((a / b).toString()));
        break;
      }
      default:
        // numeric
        stack.push(Number(token));
    }
  }
  return stack[0];
}
// @lc code=end

describe("evalRPN", () => {
  it.each([
    {
      input: ["2", "1", "+", "3", "*"],
      output: 9,
    },
    {
      input: ["4", "13", "5", "/", "+"],
      output: 6,
    },
    {
      input: [
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
      ],
      output: 22,
    },
  ])("should turn $input into $output", (testCase) => {
    expect(evalRPN(testCase.input)).toEqual(testCase.output);
  });
});
