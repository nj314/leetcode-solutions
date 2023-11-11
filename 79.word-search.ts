/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  function existsInPath(pos: number[], index: number): boolean {
    // console.log(`Searching for ${partialWord} from ${pos}`);
    if (index > word.length - 1) {
      // console.log("Success");
      return true;
    }
    // console.log("Consumed: ", consumed);
    const targetLetter = word[index];
    const adjacentCells = [
      [pos[0] - 1, pos[1]],
      [pos[0] + 1, pos[1]],
      [pos[0], pos[1] - 1],
      [pos[0], pos[1] + 1],
    ];
    for (let [r, c] of adjacentCells) {
      // Check this cell
      if (board[r]?.[c] === targetLetter) {
        board[r][c] = "#"; // mark this cell
        if (existsInPath([r, c], index + 1)) {
          return true;
        }
        board[r][c] = targetLetter; // clean up mark
      }
    }
    return false;
  }

  const targetLetter = word[0];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === targetLetter) {
        board[row][col] = "#"; // mark
        if (existsInPath([row, col], 1)) return true;
        board[row][col] = targetLetter; // unmark
      }
    }
  }
  return false;
}
// @lc code=end

describe("exist", () => {
  it.each([
    {
      word: "ABCCED",
      board: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      output: true,
    },
    {
      word: "SEE",
      board: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      output: true,
    },
    {
      word: "ABCB",
      board: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      output: false,
    },
    {
      word: "a",
      board: [["a"]],
      output: true,
    },
    {
      word: "aaa",
      board: [["a", "a"]],
      output: false,
    },
  ])("should turn $word and $board into $output", (testCase) => {
    expect(exist(testCase.board, testCase.word)).toEqual(testCase.output);
  });
});
