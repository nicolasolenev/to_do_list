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
  } else console.log('Такой задачи нет в списке');
}

function showBy(param) {
  const STATUSES = ['To Do', 'In Progress', 'Done'];
  const PRIORITIES = ['high', 'medium', 'low'];
  let selectedParam = STATUSES;

  if (param === 'priority') {
    selectedParam = PRIORITIES;
  }
  selectedParam.forEach((element) => {
    let counter = 0;
    console.log(`${element}:`);
    list.filter(function (item) {
      if (item[param] === element) {
        if (!(param === 'priority' && item.status === 'Done')) {
          counter++;
          console.log(' ' + item.name);
        }
      }
    });
    if (!counter) {
      console.log(`-`);
    }
  });
}

const list = [
]

// Ставим задачи
addTask('навестить бабушку', 'high');
addTask('постирать одежду', 'medium');
addTask('посмотреть "Веном 2"', 'low');
addTask('проверить почту', 'low');
addTask('покормить кота', 'high');
addTask('сходить на прогулку', 'medium');
addTask('погладить кота', 'high');
// Смотрим задачи по приоритету
// showBy('priority');
// Берем задачу в работу
changeStatus('навестить бабушку', 'In Progress');
// Выполнили, меняем статус
changeStatus('навестить бабушку', 'Done');

// a few moments later
changeStatus('покормить кота', 'Done');
changeStatus('сходить на прогулку', 'Done');

// Смотрим, что по задачам
// showBy('status');

// Кота погладил кто-то другой, нужно удалить задачу
deleteTask('погладить кота');



// Выводы списков в консоль
console.log('---------------------');
console.log('Sort by status:\n');
showBy('status');
console.log('\n---------------------\n');
console.log('Sort by priority:        (исключены выполненные задачи)\n');
showBy('priority');
console.log('---------------------');
// console.log(list);
