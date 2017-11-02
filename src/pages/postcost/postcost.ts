import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostdetailPage } from '../postdetail/postdetail';
import { AddPage } from '../add/add';


/**
 * Generated class for the PostcostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-postcost',
  templateUrl: 'postcost.html',
})
export class PostcostPage {

	postdetail=PostdetailPage;
  addpage=AddPage;
  deliver:any;
  fee:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.deliver=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostcostPage');
  }

  removefairprice(){

  }

  removeweeklyprice(){

  }

  removedailyprice(){

  }

  removefee(){
  	
  }

}
