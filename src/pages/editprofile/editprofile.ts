import { Component,Renderer, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KeyboardDirective } from '../../directives/keyboard/keyboard';

import { Profile } from '../profile/profile';
import { ProfileinputPage } from '../profileinput/profileinput';


/*
  Generated class for the EditprofilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {

	editprofile:any;
  profile=Profile;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.editprofile ={
      img: 'assets/img/profile-img.png', name: 'John Doe', address:'Sydney Australia', rate:'4.5', rent_nuber: '10', owner_number: '20'
    }
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePagePage');

  }


  focus(){
    console.log('ionViewDidLoad EditprofilePagePage');
    this.navCtrl.setRoot(ProfileinputPage);
  }

}
