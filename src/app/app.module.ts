import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { headerComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./shared/sharedModule";
import { TaskSharedModule } from "./tasks/tasks.sharedModule";

@NgModule({
    declarations:[AppComponent,UserComponent,headerComponent],
    bootstrap:[AppComponent],
    imports: [BrowserModule,FormsModule,CommonModule,ReactiveFormsModule,SharedModule,TaskSharedModule]
})
export class AppModule{

}