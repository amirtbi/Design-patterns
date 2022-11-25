// Factory method
var AdminTask = /** @class */ (function () {
    function AdminTask(id, author, title, tags) {
        this.taskList = [];
        this.taskId = id;
        this.author = author;
        this.title = title;
        this.tags = tags;
    }
    AdminTask.prototype.addTask = function () {
        this.taskList.push({
            title: this.title,
            author: this.author,
            taskId: this.taskId,
            tags: this.tags
        });
        console.log("Added task", this.taskList);
    };
    AdminTask.prototype.getTasks = function () {
        console.log("List of tasks ");
        console.log(this.taskList);
    };
    return AdminTask;
}());
var UserTask = /** @class */ (function () {
    function UserTask(id, author, title, tags) {
        this.taskId = id;
        this.author = author;
        this.title = title;
        this.tags = tags;
    }
    UserTask.prototype.addTask = function () {
        this.taskList.push({
            title: this.title,
            author: this.author,
            taskId: this.taskId,
            tags: this.tags
        });
        console.log("tasks added to task list");
    };
    UserTask.prototype.getTasks = function () {
        console.log("List of tasks ");
        console.log(this.taskList);
    };
    return UserTask;
}());
// Define task factory
var TaskFactory = /** @class */ (function () {
    function TaskFactory() {
    }
    TaskFactory.createTask = function (role, id, author, title, tags) {
        if (role === "Admin") {
            return new AdminTask(id, author, title, tags);
        }
        else {
            return new UserTask(id, author, title, tags);
        }
    };
    return TaskFactory;
}());
var taskForAdmin = TaskFactory.createTask("Admin", 1, "Torabi", "new task", [
    "important",
]);
taskForAdmin.addTask();
