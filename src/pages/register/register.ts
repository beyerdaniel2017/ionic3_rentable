import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home } from '../home/home';

import { SignupPage } from '../signup/signup';
import { FinishsignPage } from '../finishsign/finishsign';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {

  signup = SignupPage;
  finishsign=FinishsignPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
