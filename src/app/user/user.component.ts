import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

var randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  @Input({required:true}) user!: User 
  @Input({required:true}) selected!:boolean
//  @Input({required:true}) id!:string
//  @Input({required:true}) avatar!:string
//  @Input({required:true}) name!:string;

 @Output() select = new EventEmitter<string>();  

 
  get onImagePath(){
    return 'assets/users/'+ this.user.avatar
  }

  onClickUser(){
    this.select.emit(this.user.id);  
  }

  
}
