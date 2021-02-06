import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {IUser} from '../../Interfaces/userInterface';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService  implements Resolve<IUser[]>{

  constructor(private userService: UserService) { }

  resolve(): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.userService.getAllUsers();
  }
}
