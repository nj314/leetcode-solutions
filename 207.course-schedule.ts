/*
 * @lc app=leetcode id=207 lang=typescript
 *
 * [207] Course Schedule
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // make an "adjacency list" of course prereqs
  const indegree = Array(numCourses).fill(0);
  const prereqMap = prerequisites.reduce<Record<number, number[]>>(
    (prev, curr) => {
      // [key] is a prerequisite for [value]
      prev[curr[1]] = (prev[curr[1]] || []).concat(curr[0]);
      indegree[curr[0]]++; // indegree = how many prerequisites does this course have
      return prev;
    },
    {}
  );

  let queue: number[] = [];
  for (let course = 0; course < numCourses; course++) {
    if (indegree[course] === 0) queue.push(course);
  }

  // console.log(`initial found ${queue.length} zero indegree nodes`);

  // Remove relationships from courses with zero indegree
  let visited = 0;
  while (queue.length) {
    const course = queue.shift() as number;
    visited++;
    // console.log("visited is now ", visited);
    const followUps = prereqMap[course];
    followUps?.forEach((course) => {
      indegree[course]--;
      // console.log(`course ${course} has ${indegree[course]} indegrees now`);
      if (indegree[course] === 0) queue.push(course);
    });
  }

  return visited === numCourses;
}
// @lc code=end

describe("canFinish", () => {
  it.each([
    {
      numCourses: 2,
      prerequisites: [[1, 0]],
      output: true,
    },
    {
      numCourses: 2,
      prerequisites: [[0, 1]],
      output: true,
    },
    {
      numCourses: 2,
      prerequisites: [
        [1, 0],
        [0, 1],
      ],
      output: false,
    },
    {
      numCourses: 4,
      prerequisites: [
        [0, 1],
        [3, 1],
        [1, 3],
        [3, 2],
      ],
      output: false,
    },
    {
      numCourses: 8,
      prerequisites: [
        [1, 0],
        [2, 6],
        [1, 7],
        [6, 4],
        [7, 0],
        [0, 5],
      ],
      output: true,
    },
  ])(
    "should turn numCourses $numCourses and prereqs $prerequisites into $output",
    (testCase) => {
      expect(canFinish(testCase.numCourses, testCase.prerequisites)).toEqual(
        testCase.output
      );
    }
  );
});
