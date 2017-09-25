import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RentPage } from '../rent/rent';

/*
  Generated class for the OtherprofilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-otherprofile',
  templateUrl: 'otherprofile.html'
})
export class OtherprofilePage {


  rent=RentPage;
	otherprofile:any;
  avaiablelist: Array<any>;
  postlist: Array<any>;
  isavailable:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.otherprofile = {
      img: 'assets/img/profile-img.png', name: 'John Doe', address:'Sydney Australia', rate:'4.5', rent_nuber: '10', owner_number: '20'
    }

    this.avaiablelist =
    [
      {img: 'assets/img/11.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/22.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/33.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/11.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/22.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/33.png', title: 'John', view:'10', favourity:'20'},
    ]

    this.postlist =
    [
      {img: 'assets/img/33.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/11.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/22.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/11.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/22.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/33.png', title: 'John', view:'10', favourity:'20'},
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherprofilePagePage');
    this.isavailable="available";
  }

}
