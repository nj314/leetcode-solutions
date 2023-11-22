/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = Array(temperatures.length).fill(0);
  const stack: number[] = []; // indices
  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i];
    if (i === 0 || t <= temperatures[i - 1]) {
      stack.push(i);
      //console.log(`temperatures[${i}] = ${t} is colder, pushing...`);
    } else {
      //console.log(`temperatures[${i}] = ${t} is a warmup, proceesing:`);
      //console.log("  stack is", stack);
      for (let j = stack.length - 1; j >= 0; j--) {
        const unansweredIndex = stack[j];
        if (temperatures[unansweredIndex] >= t) break;
        answer[unansweredIndex] = i - unansweredIndex;
        const removed = stack.pop();
        //console.log("  removed", removed);
      }
      //console.log("  answer is", answer);
      stack.push(i);
      //console.log(`  Pushing ${i} (temperature: ${temperatures[i]})`);
    }
  }
  //console.log("answer is", answer);
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
    {
      input: [55, 38, 53, 81, 61, 93, 97, 32, 43, 78],
      output: [3, 1, 1, 2, 1, 1, 0, 1, 1, 0],
    },
  ])("should turn $input into $output", (testCase) => {
    expect(dailyTemperatures(testCase.input)).toEqual(testCase.output);
  });
});
