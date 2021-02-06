import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './Components/posts/posts.component';
import { PostComponent } from './Components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './Services/post.service';
import {PostResolveService} from './Services/post-resolve.service';
import { FullPostComponent } from './Components/full-post/full-post.component';


@NgModule({
  declarations: [PostsComponent, PostComponent, FullPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
  ],
  exports: [HttpClientModule],
  providers: [PostService, PostResolveService],
})
export class PostModule { }
