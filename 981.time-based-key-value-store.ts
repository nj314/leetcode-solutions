/*
 * @lc app=leetcode id=981 lang=typescript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start
class TimeMap {
  store: Record<string, Array<{ timestamp: number; value: string }>> = {};
  constructor() {}

  private binarySearchNearest(key: string, timestamp: number) {
    // console.log(`Searching for store[${key}] at t = ${timestamp}`);
    const values = this.store[key];
    if (!values) return null;
    if (values.length === 1)
      return values[0].timestamp <= timestamp
        ? { ...values[0], index: 0 }
        : null;
    let min = 0,
      max = values.length - 1;
    let nearestEntry: {
      timestamp: number;
      value: string;
      index: number;
    } | null = null;
    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      const entry = { ...values[mid], index: mid };
      // console.log(`min: ${min}, mid: ${mid}, max: ${max}`);

      if (entry.timestamp === timestamp) return entry;
      else if (entry.timestamp < timestamp) {
        nearestEntry = entry;
        min = mid + 1;
      } else if (entry.timestamp > timestamp) {
        max = mid - 1;
      }
    }
    return nearestEntry;
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.store[key]) {
      this.store[key] = [{ timestamp, value }];
    } else {
      const entry = { timestamp, value };
      const lastBefore = this.binarySearchNearest(key, timestamp);
      if (!lastBefore) this.store[key].push(entry);
      else this.store[key].splice(lastBefore.index + 1, 0, entry);
    }
    // console.log(`store[${key}] is now`, this.store[key]);
  }

  get(key: string, timestamp: number): string {
    // console.log(`\n@@ get(${key}, ${timestamp}):`);
    const lastBefore = this.binarySearchNearest(key, timestamp);
    // console.log(`  entry is ${JSON.stringify(lastBefore)}`);
    return lastBefore?.value ?? "";
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
  it("should pass example 1", () => {
    const t = new TimeMap();
    t.set("foo", "bar", 1);
    expect(t.get("foo", 1)).toEqual("bar");
    expect(t.get("foo", 4)).toEqual("bar");

    t.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
    expect(t.get("foo", 4)).toEqual("bar2");
    expect(t.get("foo", 5)).toEqual("bar2");
  });

  it("should pass example 2", () => {
    const t = new TimeMap();
    t.set("love", "high", 10);
    t.set("love", "low", 20);
    expect(t.get("love", 5)).toEqual("");
    expect(t.get("love", 10)).toEqual("high");
    expect(t.get("love", 15)).toEqual("high");
    expect(t.get("love", 20)).toEqual("low");
    expect(t.get("love", 25)).toEqual("low");
  });
});
