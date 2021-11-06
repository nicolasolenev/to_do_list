const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
}

const changeStatus = function (task, status) {
  return list[task] = status;
}
const addTask = function (task) {
  return list[task] = 'To Do';
}
const deleteTask = function (task) {
  return delete list[task];
}
const showList = function () {
  const listByStatus = {
    'To Do': '-',
    'In Progress': '-',
    'Done': '-',
  }
  const result = '';
  for (let key in listByStatus) {
    let counter = 0;
    console.log(`${key}:`);
    for (let task in list) {
      if (key === list[task]) {
        counter++;
        console.log(` "${task}"`);
      }
    }
    if (!counter) {
      console.log(`-`);
    }
  }
}

changeStatus("write a post", "Done")
addTask('have a walk')
addTask('have a rest')
deleteTask('write a post')
deleteTask('make a bed')
showList();