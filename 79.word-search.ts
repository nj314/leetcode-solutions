/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  function existsInPath(
    pos: number[],
    partialWord: string,
    consumed: number[][]
  ): boolean {
    // console.log(`Searching for ${partialWord} from ${pos}`);
    if (partialWord.length <= 1) {
      // console.log("Success");
      return true;
    }
    // console.log("Consumed: ", consumed);
    const targetLetter = partialWord[1];
    const adjacentCells = [
      [pos[0] - 1, pos[1]],
      [pos[0] + 1, pos[1]],
      [pos[0], pos[1] - 1],
      [pos[0], pos[1] + 1],
    ].filter(
      // Make sure each cell hasn't yet been consumed
      (coord) => !consumed.some((p) => p[0] === coord[0] && p[1] === coord[1])
    );
    for (let [r, c] of adjacentCells) {
      // Check this cell
      if (board[r]?.[c] === targetLetter) {
        if (
          existsInPath([r, c], partialWord.slice(1), consumed.concat([[r, c]]))
        ) {
          return true;
        }
      }
    }
    return false;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (
        board[row][col] === word[0] && // Check if this cell is a valid starting point
        existsInPath([row, col], word, [[row, col]])
      )
        return true;
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
