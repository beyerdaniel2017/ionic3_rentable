import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OtherprofilePage } from '../otherprofile/otherprofile';
import { Details } from '../details/details';


/*
  Generated class for the ChatdetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chatdetail',
  templateUrl: 'chatdetail.html'
})
export class ChatdetailPage {

	Chatdetail: any;
	otherprofile=OtherprofilePage;
	details=Details;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	 this.Chatdetail ={
      img: 'assets/img/11.png', ownerimage:'assets/img/profile-img.png', item_title:'house', price:'25'}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatdetailPagePage');
  }

}
