import { NgModule } from "@angular/core";
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/sharedModule";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[TasksComponent,TaskComponent,NewTaskComponent],
    exports:[TasksComponent],
    imports: [SharedModule,CommonModule,FormsModule]
})
export class TaskSharedModule{

}