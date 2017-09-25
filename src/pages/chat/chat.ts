import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ChatdetailPage } from '../chatdetail/chatdetail';

/*
  Generated class for the ChatPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  list: Array<any>;
	chatdetails=ChatdetailPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.list =
  	[
  		{img: 'assets/img/11.png', title: 'John', item_title:'house', history:'2 days ago'},
  	 	{img: 'assets/img/22.png', title: 'sizza', item_title:'apple', history:'3 days ago'},
  	 	{img: 'assets/img/33.png', title: 'jonathan', item_title:'nut', history:'4 days ago'},
  	 	{img: 'assets/img/11.png', title: 'Josh', item_title:'pear', history:'5 days ago'},
  	 	{img: 'assets/img/11.png', title: 'Joseph', item_title:'TV', history:'2 days ago'}
  	]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPagePage');
  }

}
