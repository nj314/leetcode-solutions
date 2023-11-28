/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0,
    right = matrix.length - 1,
    targetRow = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = matrix[mid];

    if (row[0] === target) {
      return true;
    } else if (row[0] < target && target <= row[row.length - 1]) {
      // Target is on this row
      targetRow = mid;
      break;
    } else if (row[0] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // console.log(`left: ${left}, right: ${right}, targetRow: ${targetRow}`);

  if (targetRow === -1) return false;
  const row = matrix[targetRow];
  left = 0;
  right = row.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const cell = row[mid];
    if (cell === target) {
      return true;
    } else if (cell < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
// @lc code=end

describe("searchMatrix", () => {
  it.each(
    [
      {
        input: [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        target: 3,
        output: true,
      },
      {
        input: [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        target: 13,
        output: false,
      },
      {
        input: [[1]],
        target: 0,
        output: false,
      },
      {
        input: [[1, 3]],
        target: 3,
        output: true,
      },
      {
        input: [[1], [3]],
        target: 0,
        output: false,
      },
      {
        input: [[1], [3]],
        target: 3,
        output: true,
      },
      {
        input: [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        target: 30,
        output: true,
      },
      {
        input: [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        target: 11,
        output: true,
      },
    ].slice(0)
  )("should turn $input, $target into $output", (testCase) => {
    expect(searchMatrix(testCase.input, testCase.target)).toEqual(
      testCase.output
    );
  });
});
