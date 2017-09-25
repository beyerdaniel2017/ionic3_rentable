import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
/*import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Calendar } from '@ionic-native/calendar';*/
import { FormGroup, FormControl } from '@angular/forms';

import { MapPage } from '../map/map';
import { Home } from '../home/home';
import { MapModal } from '../modal-page/modal-page';
import { SearchresultPage } from '../searchresult/searchresult';


/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  home=Home;

	categorylist:Array<any>;
  newcategorylist:Array<any>;
	map=MapModal;
  searchresult=SearchresultPage;
	datePeriod:any;
  langs:any;
  langForm:any;

  showfromprice: boolean = false;
  showtoprice: boolean=false;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
  	this.categorylist =
  	[
  		{title: 'category A', icon:'md-color-filter', number:'20'},
			{title: 'category b', icon:'md-color-palette', number:'30'},
			{title: 'category c', icon:'md-compass', number:'40'},
  		{title: 'category D', icon:'md-contrast', number:'40'}
  	]

    this.newcategorylist =
    [
      {title: 'category A', icon:'md-color-filter', image:'url(../assets/icon/ico-home_1.png)'
 ,number:'20', id:'A', value:'apple'},
      {title: 'category b', icon:'md-color-palette', number:'30' , id:'B', value:'near'},
      {title: 'category c', icon:'md-compass', number:'40', id:'C', value:'TV'},
      {title: 'category D', icon:'md-contrast', number:'40', id:'D', value:'car'}
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

  wifiApSelected(){

  }

  showfrom(){
    this.showfromprice=true;
  }

  showto(){
    this.showtoprice=true;
  }
}
