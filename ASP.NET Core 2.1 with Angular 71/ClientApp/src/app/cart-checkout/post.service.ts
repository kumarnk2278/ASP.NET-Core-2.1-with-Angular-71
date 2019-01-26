import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { classPost } from './post.class';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  url = 'https://localhost:44308/api/post'

  constructor(private http: HttpClient) { }


  getPosts(): Observable<classPost[]> {
    return this.http.get<classPost[]>(this.url + '/getposts');
  }

  CreatePost(posts: classPost): Observable<classPost > {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<classPost>(this.url + '/AddPost/',
      posts, httpOptions);
  }


  //updateEmployee(employee: classPost): Observable<classPost> {
  //  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //  return this.http.put<classPost>(this.url + '/UpdatePost/',
  //    employee, httpOptions);
  //}

  //deleteEmployeeById(employeeid: string): Observable<number> {
  //  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //  return this.http.delete<number>(this.url + '/DeletePost?id=' + employeeid,
  //    httpOptions);
  //}
}
