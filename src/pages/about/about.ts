import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Profile } from '../profile/profile';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class About {

	profile=Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}