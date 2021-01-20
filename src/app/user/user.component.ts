import {Component, Input} from '@angular/core';
import {UsersInterface} from '../InterfaceUsers/user.interface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  @Input()
  user: UsersInterface;
}
