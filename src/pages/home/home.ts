import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable} from 'angularfire2';


/*in the Component decorator, the selector value is 
replaced by the templateUrl value in action */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	posts: FirebaseListObservable<any>
  	constructor(public navCtrl: NavController, public af: AngularFire) {
  		this.posts = af.database.list('/posts')
  }

}
