import { Injectable } from '@angular/core';
/* for outside calls like REST. You will use this 
later
--import { Http } from '@angular/http';
*/
/* not sure what this is just yet...
--import 'rxjs/add/operator/map';
*/
import { ReplaySubject } from 'rxjs';

@Injectable() /*for dependency injections*/
export class Data {
	posts: ReplaySubject<{}> = new ReplaySubject<{}>()
  	constructor() {

  	}
  	get Posts() {
  		return this.posts;
  	}
  	addPost(post) {
  		this.posts.next(post) /*takes new post data and adds it to ReplaySubject*/
  	}
}


/* Old class export. Porbably need the public 
part later for REST calls and such.

export class Data {

  constructor(public http: Http) {
    console.log('Hello Data Provider');
  }

}
*/