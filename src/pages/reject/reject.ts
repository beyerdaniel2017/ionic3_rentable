import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RentPage } from '../rent/rent';

/*
  Generated class for the RejectPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reject',
  templateUrl: 'reject.html'
})
export class RejectPage {

  rent=RentPage;
  isremove:boolean;
	tracks: Array<{name: string, isChecked: boolean}> = [];
  rejectreason:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isremove=false;
    this.rejectreason = [{reason: 'Item is broken', icon: 'ios-bug-outline'}, {reason: 'I am away', icon: 'ios-plane-outline'}, {reason: 'Item is broken', icon: 'ios-plane-outline'}, {reason: 'I am away', icon: 'ios-plane-outline'}, {reason: 'I am away', icon: 'ios-plane-outline'}, {reason: 'I am away', icon: 'ios-plane-outline'}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RejectPagePage');
  }

  toggle(){

  }

}
