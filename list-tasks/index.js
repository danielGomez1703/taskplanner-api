

const tasks = require("../tasks/taskList");

module.exports = async function (context, req) {

    context.log('getting task of  planner');

    const task = req.body;
    // Implement the response
    const responseMessage = tasks.getTask();

    context.res = {
        status: 200,
        body: responseMessage
    };
}