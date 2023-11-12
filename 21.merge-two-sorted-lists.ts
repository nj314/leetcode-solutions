/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;
  let l1 = list1,
    l2 = list2;
  let head: ListNode | null = null;
  let prev: ListNode | null = head;

  while (l1 || l2) {
    let curr: ListNode;
    if (l1 && l2) {
      if (l1.val < l2.val) {
        curr = l1;
        l1 = l1.next;
      } else {
        curr = l2;
        l2 = l2.next;
      }
    } else if (l2 && !l1) {
      curr = l2;
      l2 = l2.next;
    } else if (l1 && !l2) {
      curr = l1;
      l1 = l1.next;
    } else {
      throw new Error("should never happen");
    }
    if (!head) {
      head = curr;
      // console.log("head is ", head.val);
      prev = head;
    } else if (prev) {
      prev.next = curr;
      // console.log("next: ", prev.next.val);
      prev = curr;
    }
  }

  return head;
}
// @lc code=end

describe("mergeTwoLists", () => {
  it.each([
    {
      list1: [1, 2, 4],
      list2: [1, 3, 4],
      output: [1, 1, 2, 3, 4, 4],
    },
    {
      list1: [],
      list2: [],
      output: [],
    },
    {
      list1: [],
      list2: [0],
      output: [0],
    },
  ])("should turn $list1 and $list2 into $output", (testCase) => {
    function arrayToListNodes(arr: number[]) {
      if (!arr.length) return null;
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
      mergeTwoLists(
        arrayToListNodes(testCase.list1),
        arrayToListNodes(testCase.list2)
      )
    ).toEqual(arrayToListNodes(testCase.output));
  });
});
