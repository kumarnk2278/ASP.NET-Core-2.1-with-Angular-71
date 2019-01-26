import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { PostService } from './post.service';

import { Http, Response } from '@angular/http';
import { classPost } from './post.class';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})

export class CartCheckOutComponent implements OnInit {
  posts: any[] = [];
  post1 =  new classPost();
  show: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.postService.getPosts().subscribe(
      data => {
        var _this = this;
        console.log("PUT Request is successful ", data);
        _this.posts = data;
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  addPost(): void {
    this.postService.CreatePost(this.post1)
      .subscribe(post1 => {
        this.getPost();
        this.show = true;
      },
        error => {
          console.log("Error", error);
        }
      );
  }
}
