/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 */
// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function isSymmetric(root: TreeNode | null): boolean {
  // Iterative solution
  let queue: Array<TreeNode | null> = [root, root];

  while (queue.length) {
    const t1 = queue.pop();
    const t2 = queue.pop();
    if (!t1 && !t2) continue;
    if (!t1 || !t2) return false;
    if (t1.val !== t2.val) return false;
    queue = queue.concat([t1.left, t2.right, t1.right, t2.left]);
  }
  return true;

  // Recursive solution
  /*
  if (!root) return true;
  function isMirror(
    leftRoot: TreeNode | null,
    rightRoot: TreeNode | null
  ): boolean {
    if (Boolean(leftRoot) !== Boolean(rightRoot)) return false;
    if (!leftRoot && !rightRoot) return true;
    if (!leftRoot || !rightRoot) throw new Error("should never happen");

    if (leftRoot.val !== rightRoot.val) return false;

    const doesFirstMatch = isMirror(leftRoot.right, rightRoot.left);
    if (!doesFirstMatch) return false;
    const doesSecondMatch = isMirror(leftRoot.left, rightRoot.right);
    return doesSecondMatch;
  }

  return isMirror(root.left, root.right);
  */
}
// @lc code=end

describe("isSymmetric", () => {
  it.each([
    {
      input: [1, 2, 2, 3, 4, 4, 3],
      output: true,
    },
    {
      input: [1, 2, 2, null, 3, null, 3],
      output: false,
    },
  ])("should turn $input into $output", (testCase) => {
    expect(isSymmetric(testCase.input)).toEqual(testCase.output);
  });
});
