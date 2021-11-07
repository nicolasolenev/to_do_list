const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do"
};

function changeStatus(task, status) {
  return (list[task] = status);
}

function addTask(task) {
  return (list[task] = "To Do");
}

function deleteTask(task) {
  return delete list[task];
}

function showList() {
  let toDoListOnly = "";
  let inProgressListOnly = "";
  let doneListOnly = "";
  let result = "";

  for (let task in list) {
    switch (list[task]) {
      case "To Do":
        toDoListOnly += ` "${task}"\n`;
        break;
      case "In Progress":
        inProgressListOnly += ` "${task}"\n`;
        break;
      case "Done":
        doneListOnly += ` "${task}"\n`;
        break;
    }
  }
  result += `To Do:\n`;
  result += toDoListOnly ? toDoListOnly : `-\n`;
  result += `In Progress:\n`;
  result += inProgressListOnly ? inProgressListOnly : `-\n`;
  result += `Done:\n`;
  result += doneListOnly ? doneListOnly : `-\n`;
  result = result.trim();

  console.log(result);
}

changeStatus("write a post", "Done");
addTask("have a walk");
addTask("have a rest");
deleteTask("write a post");
deleteTask("make a bed");
changeStatus("have a walk", "Done");
changeStatus("create a task", "Done");
changeStatus("have a rest", "In Progress");
showList();