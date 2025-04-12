import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone:false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) UserId!:string;
  @Output() close = new EventEmitter<void>();

 constructor(private tasksService: TasksService) {}

  enterdTitle =  '';
  enteredSummery = '';
  enteredDate = '';

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
  this.tasksService.addTasks({
    title:this.enterdTitle,
    summery:this.enteredSummery,
    date:this.enteredDate
  },this.UserId)
  this.onCancel();
  };
  
}
