const taskList = [
    {
        title: "Tarea 1 method POST",
        name: "Daniel Gomez",
        email: "daniel@mail.com",
        dueDate: new Date()
        
    },
    {
        title: "Tarea 1 method GET",
        name: "Daniel Gomez",
        email: "daniel@mail.com",
        dueDate: new Date()
        
    },
];

 function getTask() {
    return taskList;

};

function addTask(task) {
    taskList.push(task);
}

exports.getTask = getTask;
exports.addTask = addTask;
