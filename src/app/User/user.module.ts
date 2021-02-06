import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './Components/user/user.component';
import { UsersComponent } from './Components/users/users.component';
import {UserService} from './Services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {UserResolveService} from './Services/user-resolve.service';
import { FullUserComponent } from './Components/full-user/full-user.component';


@NgModule({
  declarations: [UsersComponent, UserComponent, FullUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
  ],
  exports: [HttpClientModule],
  providers: [UserService, UserResolveService],
})
export class UserModule { }
