// You're given an integer k representing a number of workers and an array of positive integers representing durations of tasks that must be completed by the workers. 
// Specifically, each worker must complete two unique tasks and can only work on one task at a time. The number of tasks will always be equal to 2k such that each worker always has exactly two tasks to complete. 
// All tasks are independent of one another and can be completed in any order. Workers will complete their assigned tasks in parallel, 
// and the time taken to complete all tasks will be equal to the time taken to complete the longest pair of tasks (see the sample output for an explanation).

// Write a function that returns the optimal assignment of tasks to each worker such that the tasks are completed as fast as possible. 
// Your function should return a list of pairs, where each pair stores the indices of the tasks that should be completed by one worker. 
// The pairs should be in the following format: [taski, task2], where the order of task and task2 doesn't matter. Your function can return the pairs in any order. 
// If multiple optimal assignments exist, any correct answer will be accepted. Note: you'll always be given at least one worker (ie., k will always be greater than 0).


// time O(nlogn) | space O(1)

function taskAssignment(k, tasks) {
  const pairedTasks = [];
  const taskDurationsToIndices = getTaskDurationToIndices(tasks);
  const sortedTasks = [...tasks].sort((a, b) => a - b);
  for(let idx = 0; idx < k; idx++) {
    const task1Duration = sortedTasks[idx];
    const indicesWithTask1Duration = taskDurationsToIndices[task1Duration];
    const task1Index = indicesWithTask1Duration.pop();

    const task2sortedIndex = tasks.length - 1 - idx;
    const task2Duration = sortedTasks[task2sortedIndex];
    const indicesWithTask2Duration = taskDurationsToIndices[task2Duration];
    const task2Index = indicesWithTask2Duration.pop();
    pairedTasks.push([task1Index, task2Index]);
  }
  return pairedTasks;
}
function getTaskDurationToIndices(tasks) {
  const taskDurationsToIndices = {};
  for(let idx = 0; idx < tasks.length; idx++) {
    const taskDuration = tasks[idx];
    if(taskDuration in taskDurationsToIndices) {
      taskDurationsToIndices[taskDuration].push(idx);
    } else {
      taskDurationsToIndices[taskDuration] = [idx];
    }
  }
  return taskDurationsToIndices;
}
