import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostdetailPage } from '../postdetail/postdetail';


/*
  Generated class for the AddPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

	postdetail=PostdetailPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPagePage');
  }

}
