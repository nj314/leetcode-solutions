/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
  // console.log("starting num: ", num);
  const values: Array<{ value: number; romanSymbol: string }> = [
    { value: 1000, romanSymbol: "M" },
    { value: 900, romanSymbol: "CM" },
    { value: 500, romanSymbol: "D" },
    { value: 400, romanSymbol: "CD" },
    { value: 100, romanSymbol: "C" },
    { value: 90, romanSymbol: "XC" },
    { value: 50, romanSymbol: "L" },
    { value: 40, romanSymbol: "XL" },
    { value: 10, romanSymbol: "X" },
    { value: 9, romanSymbol: "IX" },
    { value: 5, romanSymbol: "V" },
    { value: 4, romanSymbol: "IV" },
    { value: 1, romanSymbol: "I" },
  ];

  let answer = "";
  let remainingNum = num;

  while (remainingNum > 0) {
    const action = values.find((v) => v.value <= remainingNum);
    if (!action) throw new Error("This should never happen");
    const { value, romanSymbol } = action;
    answer += romanSymbol;
    remainingNum -= value;
    // console.log(`${remainingNum} - ${value}   adding '${romanSymbol}'`);
  }

  // console.log("answer: ", answer);
  return answer;
}
// @lc code=end

describe("intToRoman", () => {
  it.each([
    {
      input: 3,
      output: "III",
    },
    {
      input: 58,
      output: "LVIII",
    },
    {
      input: 1994,
      output: "MCMXCIV",
    },
  ])("should turn $input into $output", (testCase) => {
    expect(intToRoman(testCase.input)).toEqual(testCase.output);
  });
});
