// Factory method

// Define interface for task
interface ItaskList {
  author: string;
  title: string;
  tags: string[];
  taskId: number;
}
interface ITask extends ItaskList {
  taskList: ItaskList[];
  addTask(): void;
  getTasks(): void;
}

class AdminTask implements ITask {
  taskId: number;
  taskList: ItaskList[] = [];
  author: string;
  title: string;
  tags: string[];
  constructor(id: number, author: string, title: string, tags: string[]) {
    this.taskId = id;
    this.author = author;
    this.title = title;
    this.tags = tags;
  }
  addTask(): void {
    this.taskList.push({
      title: this.title,
      author: this.author,
      taskId: this.taskId,
      tags: this.tags,
    });
    console.log("Added task", this.taskList);
  }
  getTasks(): void {
    console.log("List of tasks ");
    console.log(this.taskList);
  }
}

class UserTask implements ITask {
  taskId: number;
  taskList: ItaskList[];
  author: string;
  title: string;
  tags: string[];

  constructor(id: number, author: string, title: string, tags: string[]) {
    this.taskId = id;
    this.author = author;
    this.title = title;
    this.tags = tags;
  }
  addTask(): void {
    this.taskList.push({
      title: this.title,
      author: this.author,
      taskId: this.taskId,
      tags: this.tags,
    });
    console.log("tasks added to task list");
  }
  getTasks(): void {
    console.log("List of tasks ");
    console.log(this.taskList);
  }
}

// Define task factory

class TaskFactory {
  public static createTask(
    role: string,
    id: number,
    author: string,
    title: string,
    tags: string[]
  ): ITask {
    if (role === "Admin") {
      return new AdminTask(id, author, title, tags);
    } else {
      return new UserTask(id, author, title, tags);
    }
  }
}

const taskForAdmin = TaskFactory.createTask("Admin", 1, "Torabi", "new task", [
  "important",
]);

taskForAdmin.addTask();
