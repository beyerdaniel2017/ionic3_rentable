import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EditprofilePage } from '../editprofile/editprofile';

/**
 * Generated class for the ProfileinputPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profileinput',
  templateUrl: 'profileinput.html',
})
export class ProfileinputPage {

	editprofile=EditprofilePage;
	data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileinputPage');
  }

  removetext(){
  	this.data="";
  }

  update(){
  	
  }

}
