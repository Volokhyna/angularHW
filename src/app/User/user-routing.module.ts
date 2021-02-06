import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './Components/users/users.component';
import {UserComponent} from './Components/user/user.component';
import {UserResolveService} from './Services/user-resolve.service';
import {FullUserComponent} from './Components/full-user/full-user.component';

const routes: Routes = [{
  /// users
  path: '', component: UsersComponent, resolve: {usersData: UserResolveService} , children: [{
    /// users/?
    path: ':id', component: FullUserComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
