"use strict";
// Factory method
class AdminTask {
    constructor(id, author, title, tags) {
        this.taskList = [];
        this.taskId = id;
        this.author = author;
        this.title = title;
        this.tags = tags;
    }
    addTask() {
        this.taskList.push({
            title: this.title,
            author: this.author,
            taskId: this.taskId,
            tags: this.tags,
        });
        console.log("Added task", this.taskList);
    }
    getTasks() {
        console.log("List of tasks ");
        console.log(this.taskList);
    }
}
class UserTask {
    constructor(id, author, title, tags) {
        this.taskId = id;
        this.author = author;
        this.title = title;
        this.tags = tags;
    }
    addTask() {
        this.taskList.push({
            title: this.title,
            author: this.author,
            taskId: this.taskId,
            tags: this.tags,
        });
        console.log("tasks added to task list");
    }
    getTasks() {
        console.log("List of tasks ");
        console.log(this.taskList);
    }
}
// Define task factory
class TaskFactory {
    static createTask(role, id, author, title, tags) {
        if (role === "Admin") {
            return new AdminTask(id, author, title, tags);
        }
        else {
            return new UserTask(id, author, title, tags);
        }
    }
}
const taskForAdmin = TaskFactory.createTask("Admin", 1, "Torabi", "new task", [
    "important",
]);
taskForAdmin.addTask();
// User task
const taskForUsr = TaskFactory.createTask("user", 2, "Emadil", "new task for emadi", ["imporatnt", "business"]);
taskForUsr.addTask();
//# sourceMappingURL=factory-pattern.js.map