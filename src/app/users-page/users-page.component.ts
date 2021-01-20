import { Component } from '@angular/core';
import {UsersInterface} from '../InterfaceUsers/user.interface';
import {users} from '../../UsersComponent/UsersComponent';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {
  users: UsersInterface[] = users;
}
