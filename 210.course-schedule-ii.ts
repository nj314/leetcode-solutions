/*
 * @lc app=leetcode id=210 lang=typescript
 *
 * [210] Course Schedule II
 */

// @lc code=start
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const indegree = Array(numCourses).fill(0);
  const prereqMap = prerequisites.reduce<Record<number, number[]>>(
    (prev, curr) => {
      const [course, prereq] = curr;
      prev[prereq] = (prev[prereq] || []).concat([course]);
      indegree[course]++;
      return prev;
    },
    {}
  );

  // console.log("prereqMap", prereqMap, "indegree", indegree);

  // Find all courses with zero indegree
  const queue = indegree
    .map((d, course) => (d === 0 ? course : -1))
    .filter((course) => course !== -1);

  // console.log("initial queue is", queue);
  const results: number[] = [];
  while (queue.length) {
    // console.log("\nindegree", indegree);
    // console.log("queue is", queue);
    const course = queue.shift() as number;
    // console.log("queue after shift is", queue);
    // For each course with zero indegree, add it to results
    results.push(course);
    // console.log(`course ${course} has zero indegree, removing it` );
    const followUps = prereqMap[course] || [];
    // console.log(`followUps for ${course}:`, followUps);
    for (const followUpCourse of followUps) {
      // console.log("operating on course ", followUpCourse);
      indegree[Number(followUpCourse)]--;
      // If this other course has no more indegree, add it to queue.
      if (indegree[Number(followUpCourse)] === 0) queue.push(followUpCourse);
    }
  }
  if (results.length !== numCourses) return []; // not possible
  return results;
}
// @lc code=end

describe("findOrder", () => {
  it.each([
    {
      numCourses: 2,
      prerequisites: [[1, 0]],
      output: [0, 1],
    },
    {
      numCourses: 3,
      prerequisites: [
        [1, 0],
        [1, 2],
        [0, 1],
      ],
      output: [],
    },
  ])(
    "should turn numCourses $numCourses with prereqs $prerequisites into $output",
    (testCase) => {
      expect(findOrder(testCase.numCourses, testCase.prerequisites)).toEqual(
        testCase.output
      );
    }
  );
});
