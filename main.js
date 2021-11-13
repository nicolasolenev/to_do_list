const STATUSES = ['To Do', 'In Progress', 'Done'];
const PRIORITIES = ['high', 'medium', 'low'];
const PARAMS = ['status', 'priority'];
const displayCompletedTasksSortedByPriority = false;

const list = [
  {
    id: 1,
    name: 'test task #1',
    status: 'To Do',
    priority: 'high',
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
    priority: 'low',
  },
];

function changeStatus(task, status) {
  const isUnavailableStatus = !STATUSES.includes(status);
  const isExistingTask = existingTask = list.find(item => item.name === task);
  if (isUnavailableStatus) {
    console.log(`Unavailable status "${status}". It can be: "${STATUSES.join('", "')}".`);
  } else if (isExistingTask) {
    existingTask.status = status;
  } else console.log(`The task "${task}" is not in the list.`);
}

function deleteTask(task) {
  const taskIndex = list.findIndex(item => item.name === task);
  const isExistingTask = taskIndex !== -1;
  isExistingTask ? list.splice(taskIndex, 1) : console.log(`The task "${task}" is not in the list. Use the function showList() to view the task list.`);
}

function addTask(taskName, priority = 'low') {
  const isEmptyTaskName = (taskName === undefined || taskName.trim() === '');
  if (isEmptyTaskName) {
    console.log('Error. The task name cannot be empty.');
    return;
  }

  const isUnavailablePriority = !PRIORITIES.includes(priority);
  if (isUnavailablePriority) {
    console.log(`Task "${taskName}" not added. The priority can be: "${PRIORITIES.join('", "')}".`);
    return;
  }

  const isExistingTask = list.find(item => item.name === taskName);
  if (isExistingTask) {
    console.log(`The task "${taskName}" is already in the list`);
    return;
  }

  const createTaskID = function () {
    const arrayOfBusyIDs = list.map(task => task.id);
    for (let i = 1; i <= arrayOfBusyIDs.length + 1; i++) {
      if (!arrayOfBusyIDs.includes(i)) return i;
    }
  }

  const newTask = {
    id: createTaskID(),
    name: taskName,
    status: 'To Do',
    priority: priority,
  }

  list.push(newTask);
}

function showList() {
  STATUSES.forEach((status) => {
    let counter = 0;
    console.log(status + ':');
    list.filter(function (task) {
      if (task.status === status) {
        counter++;
        console.log(' ' + task.name);
      }
    });
    if (!counter) {
      console.log('-');
    }
  })
}

function showBy(param = 'status') {
  const isUnavailableParam = !PARAMS.includes(param);
  if (isUnavailableParam) {
    console.log(`The showBy() function can be called with the "status", or "priority" parameter or without.`);
    return;
  }

  let selectedParam = STATUSES;
  if (param === 'priority') {
    selectedParam = PRIORITIES;
  }

  selectedParam.forEach((paramName) => {
    let counter = 0;
    console.log(`${paramName}:`);
    list.filter(function (task) {
      if (task[param] === paramName) {
        if (!(param === 'priority' && task.status === 'Done' && !displayCompletedTasksSortedByPriority)) {
          counter++;
          console.log(' ' + task.name);
        }
      }
    });
    if (!counter) {
      console.log(`-`);
    }
  });
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
// console.log('\n---------------------\n');
// console.log(`Sort by priority:  --displaying completed tasks: ${displayCompletedTasksSortedByPriority}\n`);
// showBy('priority');
// console.log('---------------------');

// console.log(list);
