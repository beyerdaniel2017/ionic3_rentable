import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

import { Details } from '../details/details';
import { MapPage } from '../map/map';
import { Home } from '../home/home';
import { MapModal } from '../modal-page/modal-page';

@Component({
  selector: 'page-likes',
  templateUrl: 'likes.html'
})
export class Likes {

  categorylist:Array<any>;
  newcategorylist:Array<any>;
  details = Details;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.categorylist = [{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline', price:'20'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline',price:'22'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline', price:'30'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline', price:'20'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price:'27'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price:'60'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price:'39'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price:'43'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price:'31'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price:'34'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price:'13'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price:'20'}]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LikesPage');
  }

}
