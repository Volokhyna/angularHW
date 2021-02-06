import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../../Interfaces/post-interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPost(): Observable<IPost[]> {
    return this
      .httpClient
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
