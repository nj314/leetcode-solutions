/*;
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static fromArray(arr: number[]): ListNode {
    const firstNode = new ListNode(arr[0], null);
    let node = firstNode;
    arr.forEach((value, i) => {
      if (i === 0) return;
      node.next = new ListNode(value, null);
      node = node.next;
    });

    return firstNode;
  }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  function toNumber(l: ListNode | null) {
    if (!l) return 0;
    let str = "";
    for (let node: ListNode | null = l; node; node = node.next) {
      str = `${node.val}${str}`;
    }
    return Number(str);
  }

  function toLinkedList(n: number) {
    const arr = n.toString().split("").reverse().map(Number);
    const firstNode = new ListNode(arr[0], null);
    let node = firstNode;
    arr.forEach((value, i) => {
      if (i === 0) return;
      node.next = new ListNode(value, null);
      node = node.next;
    });

    return firstNode;
  }

  const sum = toNumber(l1) + toNumber(l2);
  return toLinkedList(sum);
}
// @lc code=end

describe("addTwoNumbers", () => {
  it.each([
    {
      l1: [2, 4, 3],
      l2: [5, 6, 4],
      output: [7, 0, 8],
    },
  ])("should turn $l1 and $l2 into $output", (testCase) => {
    expect(
      addTwoNumbers(
        ListNode.fromArray(testCase.l1),
        ListNode.fromArray(testCase.l2)
      )
    ).toEqual(ListNode.fromArray(testCase.output));
  });
});

describe("ListNode", () => {
  it("should create from array", () => {
    expect(ListNode.fromArray([2, 4, 3])).toMatchInlineSnapshot(`
      ListNode {
        "next": ListNode {
          "next": ListNode {
            "next": null,
            "val": 3,
          },
          "val": 4,
        },
        "val": 2,
      }
    `);
  });
});
