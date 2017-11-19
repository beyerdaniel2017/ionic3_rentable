import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Details } from '../details/details';


/**
 * Generated class for the PickupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pickup',
  templateUrl: 'pickup.html',
})
export class PickupPage {

	details=Details;
	agree:any;
  togglevalue:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.togglevalue=false;
  	this.agree=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickupPage');
  }

  toggleNotification(){
    console.log()
    this.agree=!this.agree;
  }

  godetail(){
    this.navCtrl.pop();
  }

}
