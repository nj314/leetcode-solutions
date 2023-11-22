/*
 * @lc app=leetcode id=853 lang=typescript
 *
 * [853] Car Fleet
 */

// @lc code=start
function carFleet(target: number, position: number[], speed: number[]): number {
  let answer = 0;
  let fleets = position.reduce<
    Record<number, { minSpeed: number; cars: number[] }>
  >((prev, curr, i) => {
    if (!prev[curr]) {
      prev[curr] = { minSpeed: speed[i], cars: [i] };
    } else {
      prev[curr].cars.push(i);
    }
    return prev;
  }, {});

  while (Object.keys(fleets).length) {
    console.log("\ntick");
    let arrivedThisTick = false;
    fleets = Object.entries(fleets).reduce<typeof fleets>((prev, curr) => {
      const [positionStr, fleetState] = curr;
      console.log(
        `At position ${positionStr}:\n  speed ${fleetState.minSpeed}`
      );
      console.log(`  cars ${fleetState.cars}`);
      const position = Number(positionStr) + fleetState.minSpeed;

      // Did this fleet just arrive? If so, note the arrival and stop tracking.
      if (position >= target) {
        console.log(`  fleet arrived!`);
        arrivedThisTick = true;
        return prev;
      }

      const existingFleet = prev[position];
      if (existingFleet) {
        existingFleet.cars = prev[position].cars.concat(fleetState.cars);
        existingFleet.minSpeed = Math.min(
          existingFleet.minSpeed,
          fleetState.minSpeed
        );
      } else {
        prev[position] = fleetState;
      }

      return prev;
    }, {});
    answer += arrivedThisTick ? 1 : 0;
    console.log("total fleets arrived: ", answer);
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
    ].slice(5, 6)
  )(
    "should turn target $target, position $position, and speed $speed into $output",
    ({ target, position, speed, output }) => {
      expect(carFleet(target, position, speed)).toEqual(output);
    }
  );
});
