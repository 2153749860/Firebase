let task =[];

function idGenerator() {
  let timeStamp = new Date();

  let id = timestamp.getHours().toString +
        timestamp.getMinutes().toString +
        timestamp.getSeconds().toString +
        timestamp.getMilliseconds().toString;

  
  return id;

}

function createTask() {
  let taskdesc = document.getElementById("newTask");

  let task = {
    id: idGenerator(),
    data: {
      desc:taskdesc
    }
  }

  task.push(task)

  updateScreen();
}