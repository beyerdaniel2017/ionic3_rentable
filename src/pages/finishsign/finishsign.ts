import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { SignupPage } from '../signup/signup';
import { Register } from '../register/register';


/*
  Generated class for the FinishsignPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-finishsign',
  templateUrl: 'finishsign.html'
})
export class FinishsignPage {

	home=MenuPage;
  signup=SignupPage;
  register=Register;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishsignPagePage');
  }

}
