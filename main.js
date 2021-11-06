const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
}

const changeStatus = (task, status) => list[task] = status;
const addTask = task => list[task] = 'To Do';
const deleteTask = task => delete list[task];
const showList = () => {
  const listByStatus = {
    'To Do': '-',
    'In Progress': '-',
    'Done': '-',
  }
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
deleteTask('write a post')
showList();