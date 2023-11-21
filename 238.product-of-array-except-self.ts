/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const answer: number[] = [];
  let l = 1,
    r = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = l;
    l *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * r;
    r *= nums[i];
  }
  // console.log("leftProduct", leftProduct, "rightProduct", rightProduct);
  return answer;
}
// @lc code=end
