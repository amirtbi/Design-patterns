"use strict";
// // Interface
// interface ITask {
//   defineTitle(name: String): void;
//   defineDescription(desc: string): void;
//   addTask(): void;
// }
// // Class Task
// class Task {
//   public tasksList: object[] = [];
//   public title: string = "";
//   public description: string = "";
//   printTasks(): void {
//     console.log("task list", this.tasksList);
//   }
// }
// class TaskBuilder implements ITask {
//   private task: Task;
//   constructor() {
//     this.task = new Task();
//   }
//   //   public reset(): void {
//   //     this.task = new Task();
//   //   }
//   // methods
//   public defineTitle(name: string): void {
//     this.task.title = name;
//   }
//   public defineDescription(desc: string): void {
//     this.task.description = desc;
//   }
//   public addTask() {
//     this.task.tasksList.push({
//       title: this.task.title,
//       desc: this.task.description,
//     });
//   }
//   public getTask() {
//     const result = this.task;
//     this.task = new Task();
//     return result;
//   }
// }
// // Director
// class Director {
//   private builder!: ITask;
//   public setBuilder(builder: ITask): void {
//     this.builder = builder;
//   }
//   public buildTask(): void {
//     this.builder.defineTitle("task 1");
//     this.builder.defineDescription("task 1 created by user");
//     this.builder.addTask();
//   }
// }
// const builder = new TaskBuilder();
// const director = new Director();
// director.setBuilder(builder);
// director.buildTask();
// builder.getTask().printTasks();
//# sourceMappingURL=builder.js.map