import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: string[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {

    //this.users=this.userService.users.getValue();
    this.userService.users.subscribe((listOfUsers: string[])=>{ this.users = listOfUsers;})
  }

}
