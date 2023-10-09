// Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, 
// and returns the new intervals in no particular order.
// Each interval interval is an array of two integers, with interval [0] as the start of the interval and Interval[1] as the end of the interval. 
// Note that back-to-back intervals aren't considered to be overlapping. 

// For example. [1, 5] and [6, 7] aren't overlapping however, [1, 6] and [6, 7] are indeed overlapping

// Also note that the start of any particular interval will always be less than or equal to the end of that interval.

// time O(nlog(n)) | space O(n)

function mergeOverlappingIntervals(intervals) {
  const sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
  const mergedIntervals = [];
  let currentInterval = sortedIntervals[0];
  mergedIntervals.push(currentInterval);
  for (const nextInterval of sortedIntervals) {
    const [_, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;
    if (currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    else {
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }
  return mergedIntervals;
}
