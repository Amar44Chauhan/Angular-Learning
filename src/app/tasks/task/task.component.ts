import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { CommonModule} from '@angular/common';
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  standalone:false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  private taskService = inject(TasksService)

@Input({required:true}) task!:Task


onCompleteTask(){
  this.taskService.removeTask(this.task.id);
}



}
