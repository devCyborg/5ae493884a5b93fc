import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users : BehaviorSubject<string[]>= this.users= new BehaviorSubject([]);

  constructor() {

  }

  addUser(name :string) : void{

    console.log("name",name);
    /*this.listeUsers.push(name);*/
    /*this.users.next(this.listeUsers);*/

    this.users.next(this.users.getValue().concat(name));
  }
}
