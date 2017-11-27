import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Itemprovider } from '../../providers/payment/postitem';

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
  itempost:any;
  dailyprice:any;
  weeklyprice:any;
  fairprice:any;
  distance:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemprovider: Itemprovider) {
    this.deliver=false;
    this.itempost=navParams.get("itempost");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostcostPage');
  }

  removefairprice(){
    this.fairprice="";
  }

  removeweeklyprice(){
    this.weeklyprice="";
  }

  removedailyprice(){
    this.dailyprice="";
  }

  removefee(){
    this.fee="";
  }

  backadd(){
    this.navCtrl.setRoot(AddPage);
  }

  backdetail(){
    this.navCtrl.push(PostdetailPage);
  }

  Postitem(){
    this.itemprovider.Itemsave
    (
      this.fairprice,
      this.dailyprice,
      this.weeklyprice,
      this.fee,
      this.distance,
      this.distance,
      this.deliver,
      this.itempost.itemtitle,
      this.itempost.category,
      this.itempost.conditionmark,
      this.itempost.conditiontitle
    );
  }

}
