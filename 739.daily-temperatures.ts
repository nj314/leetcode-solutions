/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = Array(temperatures.length);
  for (let i = 0; i < temperatures.length; i++) {
    let daysTillWarmer = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        daysTillWarmer = j - i;
        break;
      }
    }
    answer[i] = daysTillWarmer;
  }
  return answer;
}
// @lc code=end

describe("dailyTemperatures", () => {
  it.each([
    {
      input: [73, 74, 75, 71, 69, 72, 76, 73],
      output: [1, 1, 4, 2, 1, 1, 0, 0],
    },

    {
      input: [30, 40, 50, 60],
      output: [1, 1, 1, 0],
    },
  ])("should turn $input into $output", (testCase) => {
    expect(dailyTemperatures(testCase.input)).toEqual(testCase.output);
  });
});
