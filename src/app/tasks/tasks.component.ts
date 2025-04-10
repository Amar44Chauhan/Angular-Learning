import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type TaskData } from './task/task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone:false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) name!:string
@Input({required:true}) userId!:string
isAddingTasks = false;


private tasksService = inject(TasksService);


 get SelectedUserTask(){
  return this.tasksService.getTask(this.userId);
 }

 onAddingTask(){
  this.isAddingTasks = true;

 }

 onCloseAddTask(){
  this.isAddingTasks = false;
 }

}
