/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const results: Array<Array<number>> = [];
  let queue: Array<TreeNode | null> = [root];

  while (queue.length) {
    const result: Array<number> = [];
    const itemsToWork = queue.length;
    // console.log(`Working ${itemsToWork} item(s)`);
    for (let i = 0; i < itemsToWork; i++) {
      const item = queue.shift();
      // console.log(`Working ${item?.val || null}`);
      if (item) {
        result.push(item.val);
        if (item.left) queue.push(item.left);
        if (item.right) queue.push(item.right);
      }
    }
    results.push(result);
  }

  return results;
}
// @lc code=end
