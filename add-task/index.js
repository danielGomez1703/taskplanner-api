
const lib = require("../tasks/taskList");

module.exports = async function (context, req) {

    context.log('Adding a task to the planner');

    const task = req.body;
    if (task) {
        task.id = Math.floor(Math.random() * 100)
        lib.addTask(task)
        const responseMessage = { response: "Post complete", newTask: task };

        context.res = {
            status: 201,
            body: responseMessage
        };
    }
    else {

        const responseMessage = { response: "Error en adicion" };

        context.res = {
            status: 201,
            body: responseMessage
        };
    }
 }
