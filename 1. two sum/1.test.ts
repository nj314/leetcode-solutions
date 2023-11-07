import { twoSum } from "./1.two-sum";

describe("twoSum", () => {
  it.each([
    {
      nums: [2, 7, 11, 15],
      target: 9,
      solution: [0, 1],
    },
    {
      nums: [3, 2, 4],
      target: 6,
      solution: [1, 2],
    },
    {
      nums: [3, 3],
      target: 6,
      solution: [0, 1],
    },
  ])(
    "sums $nums with target $target = $solution",
    ({ nums, target, solution }) => {
      expect(twoSum(nums, target)).toEqual(solution);
    }
  );
});
