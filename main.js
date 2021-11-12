function changeStatus(task, status) {
  const TaskInList = list.find(item => item.name === task);
  if (TaskInList) {
    TaskInList.status = status;
  } else console.log('Задачи нет в списке');
}

function addTask(taskName, priority = 'low') {
  const unavailablePriority = priority !== 'high' && priority !== 'low' && priority !== 'medium';
  if (unavailablePriority) {
    console.log('Задача не добавлена. Доступные приоритеты: "low", "medium", "high"');
    return;
  }
  const newTask = {
    id: function (arr) {
      for (let i = 1; i <= arr.length + 1; i++) {
        if (!arr.includes(i)) return i;
      }
    }(list.map(task => task.id)),
    name: taskName,
    status: 'To Do',
    priority: priority,
  }
  list.push(newTask);
}

function deleteTask(task) {
  const TaskInListID = list.findIndex(item => item.name === task);
  if (TaskInListID !== -1) {
    list.splice(TaskInListID, 1);
  } else console.log('Задачи нет в списке');
}

function showList() {
  const listOfStatuses = ['To Do', 'In Progress', 'Done'];
  listOfStatuses.forEach((element) => {
    let counter = 0;
    console.log(`${element}:`);
    list.filter(function (item) {
      if (item.status === element) {
        counter++;
        console.log(' ' + item.name);
      }
    });
    if (!counter) {
      console.log(`-`);
    }
  });
}

const list = [
  {
    id: 1,
    name: 'create a post',
    status: 'To Do',
    priority: 'low',
  },
  {
    id: 2,
    name: 'test',
    status: 'Done',
    priority: 'high',
  }
]

// changeStatus("write a post", "Done");
// addTask("have a walk");
// addTask("watch the live broadcast");
// addTask("have a rest");
// deleteTask("write a post");
// deleteTask("make a bed");
// changeStatus("have a walk", "Done");
// changeStatus("create a task", "Done");
// changeStatus("have a rest", "In Progress");
// changeStatus("have a rest", "Done");
// changeStatus("watch the live broadcast", "In Progress");
// showList();

// Новые тесты для массива

// addTask('have a walk');
// addTask('have dinner', 'medium');
// addTask('take a rest', 'high');
// changeStatus('have a walk', 'Done');
// changeStatus('have dinner', 'Done');
// showList();

// Сделайте возможность выбирать группировку для вывода.Например
// showBy(‘priority’) - чтобы выводил по приоритетам
// high:
// test
// somethin else
// low:
// -
//   чтобы можно было вызывать showBy(‘priority’) или showBy(‘status’)

function showBy(param) {
  const STATUSES = ['To Do', 'In Progress', 'Done'];
  const PRIORITIES = ['low', 'medium', 'high'];
  let selectedParam = STATUSES;

  if (param === 'priority') {
    selectedParam = PRIORITIES;
  }
  selectedParam.forEach((element) => {
    let counter = 0;
    console.log(`${element}:`);
    list.filter(function (item) {
      if (item[param] === element) {
        counter++;
        console.log(' ' + item.name);
      }
    });
    if (!counter) {
      console.log(`-`);
    }
  });


}

showBy('status');
console.log('------------------------');
showList();