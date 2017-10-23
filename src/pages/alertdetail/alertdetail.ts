import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { FormGroup, FormControl } from '@angular/forms';
import { MapModal } from '../modal-page/modal-page';
import { AlertsPage } from '../alerts/alerts';
/*
  Generated class for the AlertdetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alertdetail',
  templateUrl: 'alertdetail.html'
})
export class AlertdetailPage {

  categorylist:Array<any>;
	map=MapModal;
	datePeriod:any;
  langs:any;
  langForm:any;
  alert=AlertsPage;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
  	this.categorylist =
  	[
  		{title: 'category A', icon:'md-color-filter', number:'20'},
			{title: 'category b', icon:'md-color-palette', number:'30'},
			{title: 'category c', icon:'md-compass', number:'40'},
  		{title: 'category D', icon:'md-contrast', number:'40'}
  	]

    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
	}

	ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPagePage');
  }

  presentModal() {
    let modal = this.modalCtrl.create(MapModal);
    modal.present();
  }

  fromprice(){

  }

  toprice(){

  }

  doSubmit(){

  }

}
