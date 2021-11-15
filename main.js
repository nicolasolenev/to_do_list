const list = [];
const STATUSES = ['To Do', 'In Progress', 'Done'];
let ID = 1;
function getTaskIndex(name) {
  return list.findIndex((task) => task.name === name);
}

function changeStatus(task, status) {
  list[getTaskIndex(task)].status = status;
}

function addTask(task, priority = 'low') {
  list.push({
    id: ID++,
    name: task,
    status: 'To Do',
    priority: priority,
  });
}

function deleteTask(task) {
  list.splice(getTaskIndex(task), 1);
}

function showList() {
  const sortedList = {};
  STATUSES.forEach((status) => sortedList[status] = list.filter((task) => task.status === status).map((task) => task.name));
  for (let status in sortedList) {
    const isEmptyTaskList = !sortedList[status].length;
    if (isEmptyTaskList) sortedList[status].push('-');
    console.log(`${status}:\n ${sortedList[status].join('\n ')}`);
  }
}