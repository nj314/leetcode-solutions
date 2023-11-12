/*
 * @lc app=leetcode id=107 lang=typescript
 *
 * [107] Binary Tree Level Order Traversal II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  const results: Array<Array<number>> = [];
  if (!root) return results;
  const queue: Array<TreeNode | null> = [root];

  while (queue.length) {
    const level: number[] = [];
    const itemsToWork = queue.length;
    for (let i = 0; i < itemsToWork; i++) {
      const node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left, node.right);
      }
    }
    if (level.length) results.unshift(level);
  }

  return results;
}
// @lc code=end
