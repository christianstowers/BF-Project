import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
/*didn't need FirebaseListObservable because won't be 
observing data, only pushing new data. It is needed 
in the home.ts file.*/

/*
  Generated class for the Post page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

class Post {
	title: string
	body: string
	id: string

	constructor() { }
}

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {
	post: Post = new Post()
  constructor(public navCtrl: NavController, public af: AngularFire) {}

/*selects and displays the Feed page upon submit*/
  submit() {
  	this.af.database.list('/posts').push(this.post) /*tells angularfire at /posts add a new piece of data. similar to firebase api's update method.*/
  	this.post = new Post() /* clears out old post data*/
  	this.navCtrl.parent.select(0) /* return to Feed page*/
  }

}
