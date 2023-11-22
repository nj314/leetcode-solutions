/*
 * @lc app=leetcode id=853 lang=typescript
 *
 * [853] Car Fleet
 */

// @lc code=start
function carFleet(target: number, position: number[], speed: number[]): number {
  let answer = 0;
  const cars = position
    .map((pos, i) => [pos, i, speed[i]])
    .sort((a, b) => b[0] - a[0]);
  //console.log("cars", cars);
  const timeToTarget = cars.map(
    ([pos, initialIndex, speed], i) => (target - pos) / speed
  );
  //console.log("initial timeToTarget", timeToTarget);
  for (let i = 0; i < cars.length - 1; i++) {
    if (timeToTarget[i] > timeToTarget[i + 1]) {
      // These two cars will form a fleet before reaching the target
      // the "next" car back will slow down and reach the target at the same time as the current car
      timeToTarget[i + 1] = timeToTarget[i];
    }
    //console.log("timeToTarget", timeToTarget);
  }
  for (let i = 0; i < timeToTarget.length; i++) {
    if (timeToTarget[i] !== timeToTarget[i - 1]) answer++;
  }

  return answer;
}
// @lc code=end

describe("carFleet", () => {
  it.each(
    [
      {
        target: 12,
        position: [10, 8, 0, 5, 3],
        speed: [2, 4, 1, 1, 3],
        output: 3,
      },
      {
        target: 10,
        position: [3],
        speed: [3],
        output: 1,
      },

      {
        target: 100,
        position: [0, 2, 4],
        speed: [4, 2, 1],
        output: 1,
      },
      {
        target: 10,
        position: [4, 6],
        speed: [3, 2],
        output: 1,
      },
      {
        target: 20,
        position: [6, 2, 17],
        speed: [3, 9, 2],
        output: 2,
      },
      {
        target: 10,
        position: [8, 3, 7, 4, 6, 5],
        speed: [4, 4, 4, 4, 4, 4],
        output: 6,
      },
      {
        target: 16,
        position: [11, 14, 13, 6],
        speed: [2, 2, 6, 7],
        output: 2,
      },
    ].slice(0)
  )(
    "should turn target $target, position $position, and speed $speed into $output",
    ({ target, position, speed, output }) => {
      expect(carFleet(target, position, speed)).toEqual(output);
    }
  );
});
