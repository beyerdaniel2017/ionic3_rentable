import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Profile } from '../profile/profile';
import { SearchPage } from '../search/search';
import { Details } from '../details/details';

/*
  Generated class for the SearchresultPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-searchresult',
  templateUrl: 'searchresult.html'
})
export class SearchresultPage {

	profile=Profile;
	search=SearchPage;
  details=Details;
  categorylist:Array<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
/*   this.categorylist = [{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'}]
*/    
    this.categorylist = [{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline', price:'20'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline',price:'22'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline', price:'30'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline', price:'20'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price:'27'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price:'60'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price:'39'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price:'43'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price:'31'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price:'34'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price:'13'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price:'20'}]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchresultPagePage');
  }

}
