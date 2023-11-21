/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
  store: number[] = [];
  min: number[] = [];
  constructor() {}

  push(val: number): void {
    this.store.push(val);
    if (this.min.length === 0 || val <= this.min[this.min.length - 1]) {
      this.min.push(val);
    }
  }

  pop(): void {
    const val = this.store.pop();
    if (this.min[this.min.length - 1] === val) {
      this.min.pop();
    }
  }

  top(): number {
    return this.store[this.store.length - 1];
  }

  getMin(): number {
    // console.log(`length is ${this.store.length}`);
    // console.log(`last element is`, this.store[this.store.length - 1]);
    return this.min[this.min.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

describe("MinStack", () => {
  it("should pass example 1", () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toEqual(-3);
    minStack.pop();
    expect(minStack.top()).toEqual(0);
    expect(minStack.getMin()).toEqual(-2);
  });
});
