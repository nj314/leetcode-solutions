/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = Array(temperatures.length);
  const warmups: [number, number][] = []; // [temperature, index]
  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] <= temperatures[i - 1]) continue;
    warmups.push([temperatures[i], i]);
  }
  for (let i = 0; i < temperatures.length; i++) {
    const target = temperatures[i];
    let daysTillWarmer = 0;
    for (let j = 0; j < warmups.length; j++) {
      const [temperature, index] = warmups[j];
      if (index <= i) continue;
      if (temperature > target) {
        daysTillWarmer = index - i;
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
