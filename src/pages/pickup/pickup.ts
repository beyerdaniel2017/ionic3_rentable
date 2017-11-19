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
  togglevalue:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.togglevalue=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickupPage');
  }



  godetail(){
    this.navCtrl.pop();
  }

}
