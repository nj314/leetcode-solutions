/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Merge the two arrays
  let min = 0;
  while (nums2.length) {
    let max = nums1.length - 1,
      targetIndex = nums1.length;
    const current = nums2.shift() as number;
    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      if (
        nums1[mid] === current ||
        (nums1[mid] < current &&
          (nums1[mid + 1] === undefined || nums1[mid + 1] >= current))
      ) {
        targetIndex = mid + 1;
        break;
      } else if (nums1[mid] > current) {
        targetIndex = mid - 1;
        max = targetIndex;
      } else {
        targetIndex = mid + 1;
        min = targetIndex;
      }
    }
    //console.log(`curr is ${current}, targetIndex is ${targetIndex}`);
    nums1.splice(Math.max(targetIndex, 0), 0, current);
  }
  //console.log("nums1 is", nums1);

  // Find median
  const middleIndexNumber = (nums1.length - 1) / 2;
  const middleIndices = [
    Math.floor(middleIndexNumber),
    Math.ceil(middleIndexNumber),
  ];
  //console.log(`final length = ${nums1.length}`);
  //console.log(`middle indices: `, middleIndices);
  return (nums1[middleIndices[0]] + nums1[middleIndices[1]]) / 2;
}
// @lc code=end

describe("findMedianSortedArrays", () => {
  it.each(
    [
      {
        input: [[1, 3], [2]],
        output: 2.0,
      },
      {
        input: [
          [1, 2],
          [3, 4],
        ],
        output: 2.5,
      },
      {
        input: [
          [1, 1, 1, 2],
          [3, 4, 4, 4],
        ],
        output: 2.5,
      },
      {
        input: [[3], [-2, -1]],
        output: -1,
      },
      {
        input: [
          [1, 2],
          [-1, 3],
        ],
        output: 1.5,
      },
    ].slice(0)
  )("should turn $input into $output", (testCase) => {
    expect(
      findMedianSortedArrays(testCase.input[0], testCase.input[1])
    ).toEqual(testCase.output);
  });
});
