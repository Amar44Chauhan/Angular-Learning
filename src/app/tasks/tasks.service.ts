import { Injectable } from "@angular/core";
import { TaskData } from "./task/task.model";

 @Injectable({
    providedIn:'root'
 })

 export class TasksService{
    constructor() {
        const tasks = localStorage.getItem('tasks');
        if(tasks){
             this.tasks = JSON.parse(tasks);
        }
    }

   private tasks= [
      {
      id:'t1',
      userId:'u1',
      title:'Master Angular',
      summery:'Learn all the basic to advance feature of angular',
      dueDate:'2025-04-10'
    },
    {
      id:'t2',
      userId:'u2',
      title:'Learn DSA in C#',
      summery:'Learn how to solve problem in real projects',
      dueDate:'2025-06-21'
    },
    {
      id:'t3',
      userId:'u3',
      title:'Master English',
      summery:'Master english to achive success in you life',
      dueDate:'2025-03-18'
    }
    ];


    getTask(userId:string){
     return this.tasks.filter((task)=> task.userId === userId)
    }

    addTasks(taskData:TaskData,userId:string){
         this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summery: taskData.summery,
            dueDate: taskData.date,
       });
       this.saveTasks();
    }

    removeTask(id:string){
     this.tasks = this.tasks.filter((task)=> task.id !== id)
    this.saveTasks();
    }

    saveTasks(){
     localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }
  
  }


