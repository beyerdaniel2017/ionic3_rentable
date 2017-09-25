import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostcostPage } from '../postcost/postcost';
import { AddPage } from '../add/add';


/**
 * Generated class for the PostdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-postdetail',
  templateUrl: 'postdetail.html',
})
export class PostdetailPage {

	postcost=PostcostPage;
	addpage=AddPage;
  goodcondition:number[] = [1, 2, 3, 4];
  badcondition:number[] = [1];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostdetailPage');
  }

}
