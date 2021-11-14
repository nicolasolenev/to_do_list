const STATUSES = ['To Do', 'In Progress', 'Done'];
const PRIORITIES = ['high', 'medium', 'low'];
const PARAMS = ['status', 'priority'];
const displayCompletedTasksSortedByPriority = false;
const getTaskIndex = name => list.findIndex((task) => task.name === name);

const list = [
  {
    id: 1,
    name: 'test task #1',
    status: 'To Do',
    priority: 'low',
  },
  {
    id: 2,
    name: 'test task #2',
    status: 'In Progress',
    priority: 'medium',
  },
  {
    id: 3,
    name: 'test task #3',
    status: 'Done',
    priority: 'high',
  },
];


function changeStatus(task, status) {
  const isUnavailableStatus = !STATUSES.includes(status);
  const taskIndex = getTaskIndex(task);
  const isExistingTask = (taskIndex !== -1);
  if (isUnavailableStatus) {
    console.log(`Unavailable status "${status}". It can be: "${STATUSES.join('", "')}".`);
  } else if (isExistingTask) {
    list[taskIndex].status = status;
  } else console.log(`The task "${task}" is not in the list.`);
}

function addTask(task, priority = 'low') {
  const isEmptyTask = (task === undefined || task.trim() === '');
  const isUnavailablePriority = !PRIORITIES.includes(priority);
  const isExistingTask = (getTaskIndex(task) !== -1);
  if (isEmptyTask) {
    return console.log('Error. The task name cannot be empty.');
  } else if (isUnavailablePriority) {
    return console.log(`Task "${task}" not added. The priority can be: "${PRIORITIES.join('", "')}".`);
  } else if (isExistingTask) {
    return console.log(`The task "${task}" is already in the list.`);
  }

  const createTaskID = function () {
    const arrayOfBusyIDs = list.map(task => task.id);
    for (let i = 1; i <= arrayOfBusyIDs.length + 1; i++) {
      if (!arrayOfBusyIDs.includes(i)) return i;
    }
  }

  const newTask = {
    id: createTaskID(),
    name: task,
    status: 'To Do',
    priority: priority,
  }

  list.push(newTask);
}

function deleteTask(task) {
  const taskIndex = getTaskIndex(task);
  const isExistingTask = (taskIndex !== -1);
  isExistingTask ? list.splice(taskIndex, 1) : console.log(`The task "${task}" is not in the list. Use the function showList() to view the task list.`);
}

function showList() {
  const sortedList = {};
  STATUSES.forEach(function (status) {
    const arrOfTasksByStatus = list.filter(task => task.status === status).map(task => '"' + task.name + '"');
    sortedList[status] = arrOfTasksByStatus;
    const isNoTasks = sortedList[status].length === 0;
    if (isNoTasks) sortedList[status].push('-');
  });

  for (let status in sortedList) {
    console.log(`${status}:\n ${sortedList[status].join('\n ')}`);
  }
}

function showBy(param = 'status') {
  const isUnavailableParam = !PARAMS.includes(param);
  if (isUnavailableParam) {
    return console.log(`The showBy() function can be called with the "status", or "priority" parameter or without.`);
  }

  let selectedParam = STATUSES;
  if (param === 'priority') {
    selectedParam = PRIORITIES;
  }

  const sortedList = {};
  selectedParam.forEach(paramName => {
    const arrOfTasksByParam = list.filter(function (task) {
      if (!(param === 'priority' && task.status === 'Done' && !displayCompletedTasksSortedByPriority))
        return task[param] === paramName;
    }).map(task => '"' + task.name + '"');
    sortedList[paramName] = arrOfTasksByParam;
    if (sortedList[paramName].length === 0) sortedList[paramName].push('-');
  });

  for (let status in sortedList) {
    console.log(`${status}:\n ${sortedList[status].join('\n ')}`);
  }
}



// addTask('test task #4', 'high');
// addTask('test task #5', 'medium');
// addTask('test task #6');
// changeStatus('test task #4', 'In Progress');
// changeStatus('test task #4', 'Done');
// changeStatus('test task #5', 'Done');
// changeStatus('test task #1', 'In Progress');
// deleteTask('test task #6');

// console.log('---------------------');
// console.log('Sort by status:\n');
// showBy('status');
// console.log('\n---------------------');
// console.log(`Sort by priority:  --displaying completed tasks: ${displayCompletedTasksSortedByPriority}\n`);
// showBy('priority');
// console.log('---------------------');