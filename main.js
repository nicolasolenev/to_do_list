const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
}

// console.log(list);

// Функция changeStatus - будет менять статус задачи
const changeStatus = (task, status) => list[task] = status;
changeStatus("write a post", "Done")


// Функция addTask - добавляет новую задачу
const addTask = task => list[task] = 'To Do';
addTask('have a walk')
addTask('make a coffee')
addTask('take a break')

changeStatus("have a walk", "Done")

// Функция deleteTask - удаляет задачу
const deleteTask = task => delete list[task];
deleteTask('make a coffee')



// Функция showList будет выводить весь список дел в виде
// Todo:
// "create a task",
//   "make a bed",
//   In Progress:
// "write a post"
// Done:
// -
const showList = () => {
  console.log('Todo:');
  let counter = 0;
  for (let key in list) {
    if (list[key] === 'To Do') {
      counter++;
      console.log(` "${key}"`);
    }
  }
  if (!counter) console.log('-');

  console.log('In Progress:');
  counter = 0;
  for (let key in list) {
    if (list[key] === 'In Progress') {
      counter++;
      console.log(` "${key}"`);
    }
  }
  if (!counter) console.log('-');

  console.log('Done:');
  counter = 0;
  for (let key in list) {
    if (list[key] === 'Done') {
      counter++;
      console.log(` "${key}"`);
    }
  }
  if (!counter) console.log('-');
}
showList();

//   Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль