/*
 * @lc app=leetcode id=207 lang=typescript
 *
 * [207] Course Schedule
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // make a hashmap of course prereqs
  const prereqMap = prerequisites.reduce<Record<number, number[]>>(
    (prev, curr) => {
      prev[curr[0]] = (prev[curr[0]] || []).concat(curr[1]);
      return prev;
    },
    {}
  );

  for (const courseIdStr in prereqMap) {
    const rootCourseId = Number(courseIdStr);
    // console.log("rootCourseId", rootCourseId);
    const queue: number[] = [rootCourseId];
    const coursesTaken = new Set<number>([rootCourseId]);

    // Verify that courseId is not in prereqs at any depth
    while (queue.length) {
      const currentCourse = queue.shift();
      if (currentCourse === undefined) throw new Error("Should never happen");
      coursesTaken.add(currentCourse);
      const prereqs = prereqMap[currentCourse];
      // console.log("currentCourse: ", currentCourse, "prereqs: ", prereqs);
      if (!prereqs?.length) continue;
      if (prereqs.includes(rootCourseId)) {
        // console.log("returning false, root course id", rootCourseId);
        return false;
      }

      queue.push(...prereqs.filter((p) => !coursesTaken.has(p)));
    }
  }
  return true;
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
