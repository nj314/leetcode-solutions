/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  function isValidCell(cellStr: string) {
    const cell = Number(cellStr);
    return (
      cellStr === "." || (cell >= 1 && cell <= 9 && Number.isInteger(cell))
    );
  }

  function isValidVector(v: Array<string>) {
    const hasValue = Array(9);
    for (let cellStr of v) {
      if (cellStr === ".") continue;
      const cell = Number(cellStr);
      if (hasValue[cell]) {
        console.log("duplicate value detected");
        return false;
      }
      if (!isValidCell(cellStr)) {
        console.log("invalid cell", cellStr);
        return false;
      }
      hasValue[cell] = true;
    }
    return true;
  }

  // Validate rows
  console.log("validating rows");
  for (let row of board) {
    if (!isValidVector(row)) {
      return false;
    }
  }

  // Validate columns
  console.log("validating columns");
  for (let i = 0; i < 9; i++) {
    const col = board.map((row) => row[i]);
    if (!isValidVector(col)) return false;
  }

  console.log("validating sub boxes");
  // Validate sub boxes
  for (let i = 0; i < 9; i += 3) {
    // iterate through rows
    for (let j = 0; j < 9; j += 3) {
      // iterate through cols
      const cells = board.slice(i, i + 3).flatMap((row) => row.slice(j, j + 3));
      if (!isValidVector(cells)) return false;
    }
  }
  console.error("subboxes are valid");

  return true;
}
// @lc code=end

describe("isValidSudoku", () => {
  it.each([
    {
      board: [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ],
      output: true,
    },
    {
      board: [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ],
      output: false,
    },
  ])("should turn $board into $output", (testCase) => {
    expect(isValidSudoku(testCase.board)).toEqual(testCase.output);
  });
});

Number.parseInt;
