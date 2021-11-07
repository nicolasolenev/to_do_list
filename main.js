const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do"
};

function changeStatus(task, status) {
  list[task] = status;
}

function addTask(task) {
  list[task] = "To Do";
}

function deleteTask(task) {
  delete list[task];
}

function showList() {
  const listOfStatus = {
    "To Do": "",
    "In Progress": "",
    Done: ""
  };
  for (let status in listOfStatus) {
    let counter = 0;
    console.log(`${status}:`);
    for (let task in list) {
      if (list[task] === status) {
        counter++;
        console.log(` "${task}"`);
      }
    }
    if (!counter) {
      console.log(`-`);
    }
  }
}

changeStatus("write a post", "Done");
addTask("have a walk");
addTask("watch the live broadcast");
addTask("have a rest");
deleteTask("write a post");
deleteTask("make a bed");
changeStatus("have a walk", "Done");
changeStatus("create a task", "Done");
changeStatus("have a rest", "In Progress");
changeStatus("have a rest", "Done");
changeStatus("watch the live broadcast", "In Progress");
showList();
