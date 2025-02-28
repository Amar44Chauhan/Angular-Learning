import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

var randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectUser = DUMMY_USERS[randomIndex];

  get imagePath(){
    return 'assets/users/' + this.selectUser.avatar
  }

  onClickUser(){
    var randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
    this.selectUser = DUMMY_USERS[randomIndex];

  }
}
