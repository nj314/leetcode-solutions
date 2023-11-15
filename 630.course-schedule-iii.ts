/*
 * @lc app=leetcode id=630 lang=typescript
 *
 * [630] Course Schedule III
 */

// @lc code=start
function scheduleCourse(courses: number[][]): number {
  courses.sort((a, b) => a[1] - b[1]); // sort by due day asc
  const memoSchedule: number[][] = [[]];

  /**
   * @param i Starting course index
   * @param time Currently-elapsed time
   * @returns Max number of courses which can be taken
   */
  function schedule(i: number, time: number): number {
    if (i === courses.length) return 0;
    if (memoSchedule[i]?.[time] !== undefined) return memoSchedule[i][time];

    const [duration, dueDay] = courses[i];
    let taken = 0;

    // Option 1: do take this course
    if (time + duration <= dueDay) {
      taken = 1 + schedule(i + 1, time + duration);
    }

    // option 2: don't take this course
    const notTaken = schedule(i + 1, time);

    // find the best option's max number of courses and memoize this function's result
    const max = Math.max(taken, notTaken);
    if (!memoSchedule[i]) memoSchedule[i] = [];
    memoSchedule[i][time] = max;

    return max;
  }

  return schedule(0, 0);
}
// @lc code=end

describe("scheduleCourse", () => {
  it.each([
    {
      input: [
        [100, 200],
        [200, 1300],
        [1000, 1250],
        [2000, 3200],
      ],
      output: 3,
    },
    {
      input: [[1, 2]],
      output: 1,
    },
    {
      input: [
        [3, 2],
        [4, 3],
      ],
      output: 0,
    },
    {
      input: [
        [5, 5],
        [4, 6],
        [2, 6],
      ],
      output: 2,
    },
    {
      input: [
        [860, 4825],
        [13, 1389],
        [746, 8823],
        [455, 2778],
        [233, 2069],
        [106, 5648],
        [802, 2969],
        [958, 2636],
        [567, 2439],
        [623, 1360],
        [700, 4206],
        [9, 3725],
        [241, 7381],
      ],
      output: 12,
    },
  ])("should turn $input into $output", (testCase) => {
    expect(scheduleCourse(testCase.input)).toEqual(testCase.output);
  });
});
