import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/user-resolve.service';
import { FullUserComponent } from './components/full-user/full-user.component';
import {PostResolveService} from './services/post-resolve.service';
import { FullPostComponent } from './components/full-post/full-post.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService}, children: [
      {path: ':id', component: FullUserComponent}
    ]},
  {path: 'posts', component: PostsComponent, resolve: {postsData: PostResolveService}, children: [
      {path: ':id', component: FullPostComponent}
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    FullUserComponent,
    FullPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
