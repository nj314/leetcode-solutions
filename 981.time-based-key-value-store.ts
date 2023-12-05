/*
 * @lc app=leetcode id=981 lang=typescript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start
class TimeMap {
  store: Record<string, Array<[number, string]>> = {};
  constructor() {}

  set(key: string, value: string, timestamp: number): void {
    if (!this.store[key]) {
      this.store[key] = [[timestamp, value]];
    } else {
      this.store[key].push([timestamp, value]);
      this.store[key].sort((a, b) => a[0] - b[0]);
    }
  }

  get(key: string, timestamp: number): string {
    const values = this.store[key];
    let lastValue = "";
    for (let i = 0; i < values.length; i++) {
      const [t, v] = values[i];
      if (t <= timestamp) lastValue = v;
      else break;
    }
    return lastValue;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end

describe("TimeMap", () => {
  it("should be correct", (testCase) => {
    const t = new TimeMap();
    t.set("foo", "bar", 1);
    expect(t.get("foo", 1)).toEqual("bar");
    expect(t.get("foo", 4)).toEqual("bar");

    t.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
    expect(t.get("foo", 4)).toEqual("bar2");
    expect(t.get("foo", 5)).toEqual("bar2");
  });
});
