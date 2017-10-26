import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Details } from '../details/details';

/*
  Generated class for the AcceptPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-accept',
  templateUrl: 'accept.html'
})
export class AcceptPage {

	details=Details;
  agree:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.agree="yes";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptPagePage');
  }

}
