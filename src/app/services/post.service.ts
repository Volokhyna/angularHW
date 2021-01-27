import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpPostClient: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this
      .httpPostClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}

