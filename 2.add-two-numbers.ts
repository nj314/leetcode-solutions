/*;
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 *
 * class ListNode {
 *   val: number;
 *   next: ListNode | null;
 *   constructor(val?: number, next?: ListNode | null) {
 *     this.val = val === undefined ? 0 : val;
 *     this.next = next === undefined ? null : next;
 *   }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let a = l1,
    b = l2;
  let carried = 0;
  let result = new ListNode(0, null);
  let node: ListNode = result;
  while (a || b || carried) {
    const digitSum = (a?.val ?? 0) + (b?.val ?? 0) + carried;
    node.val = digitSum % 10;
    // console.log("adding a ", node.val);
    carried = (digitSum - node.val) / 10;

    a = a?.next || null;
    b = b?.next || null;
    if (a || b || carried) {
      node.next = new ListNode(0, null);
      node = node.next;
    }
  }

  return result;
}
// @lc code=end

describe("addTwoNumbers", () => {
  it.each([
    {
      l1: [2, 4, 3],
      l2: [5, 6, 4],
      output: [7, 0, 8],
    },
    {
      l1: [0],
      l2: [0],
      output: [0],
    },
    {
      l1: [9, 9, 9, 9, 9, 9, 9],
      l2: [9, 9, 9, 9],
      output: [8, 9, 9, 9, 0, 0, 0, 1],
    },
    {
      l1: [2, 4, 9],
      l2: [5, 6, 4, 9],
      output: [7, 0, 4, 0, 1],
    },
    {
      l1: [
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ],
      l2: [5, 6, 4],
      output: [
        6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ],
    },
  ])("should turn $l1 and $l2 into $output", (testCase) => {
    function arrayToListNodes(arr: number[]) {
      const firstNode = new ListNode(arr[0], null);
      arr.reduce((prev, curr, i) => {
        if (i === 0) return prev;
        const newNode = new ListNode(curr, null);
        prev.next = newNode;
        return prev.next;
      }, firstNode);
      return firstNode;
    }

    expect(
      addTwoNumbers(
        arrayToListNodes(testCase.l1),
        arrayToListNodes(testCase.l2)
      )
    ).toEqual(arrayToListNodes(testCase.output));
  });
});
