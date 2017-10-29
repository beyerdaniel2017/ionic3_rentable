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

  categorylist:Array<any>;
  newcategorylist:Array<any>;
	map=MapModal;
  searchresult=SearchresultPage;
  home=Home;
	datePeriod:any;
  langs:any;
  langForm:any;
  deliversort:any;
  postwithin:any;
  within:any;

  showfromprice: boolean = false;
  showtoprice: boolean=false;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
  	this.categorylist = [
      {active_img: 'assets/icon/cat-nearyou-red.png', title: 'Nearby', inactive_img: 'assets/icon/cat-nearyou-grey.png', value:'nearby',radionumber:'radio1'},
      {active_img: 'assets/icon/cat-electronics-red.png', title: 'Electronics', inactive_img: 'assets/icon/cat-electronics-grey.png', value:'electronics',radionumber:'radio2'},
      {active_img: 'assets/icon/cat-cars-red.png', title: 'Cars and motors', inactive_img: 'assets/icon/cat-cars-grey.png', value:'cars',radionumber:'radio3'},
      {active_img: 'assets/icon/cat-sports-red.png', title: 'Sports and leisure', inactive_img: 'assets/icon/cat-sports-grey.png', value:'sports',radionumber:'radio4'},
      {active_img: 'assets/icon/cat-home-red.png', title: 'Home and garden', inactive_img: 'assets/icon/cat-home-grey.png', value:'home',radionumber:'radio5'},
      {active_img: 'assets/icon/cat-movies-red.png', title: 'Movies and music', inactive_img: 'assets/icon/cat-movies-grey.png', value:'movies',radionumber:'radio6'},
      {active_img: 'assets/icon/cat-fashion-red.png', title: 'Fashion and accessories', inactive_img: 'assets/icon/cat-fashion-grey.png', value:'fashion',radionumber:'radio7'},
      {active_img: 'assets/icon/cat-baby-red.png', title: 'Baby and child', inactive_img: 'assets/icon/cat-baby-grey.png', value:'baby',radionumber:'radio8'},
      {active_img: 'assets/icon/cat-tools-red.png', title: 'Tools and machines', inactive_img: 'assets/icon/cat-tools-grey.png', value:'tools',radionumber:'radio9'},
      {active_img: 'assets/icon/cat-party-red.png', title: 'Party and Events', inactive_img: 'assets/icon/cat-party-grey.png', value:'party',radionumber:'radio10'}
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
      "langs": new FormControl({value: 'newset', disabled: false})
    });
    this.postwithin = new FormGroup({
      "within": new FormControl({value: 'all', disabled: false})
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

  myFunction(event){
    var target = event.target || event.srcElement || event.currentTarget;
    console.log(event.srcElement + " event.srcElement");
    var parent = event.srcElement.parentElement;
    console.log(parent + " parent");
    var preparent = parent.parentElement;
    var divparent = preparent.parentElement;
    var children = divparent.children;
    console.log(preparent + " preparent");
    var count = children.length;
    console.log(count + "count");
    for (var i = 0; i < count; ++i) {
      if(preparent==children[i]){
        var image=this.categorylist[i].active_img;
        console.log(children[i].getElementsByTagName('label')[0].getElementsByTagName('img')[0] + "children[i]");
        children[i].getElementsByTagName('label')[0].getElementsByTagName('img')[0].setAttribute("src", image);
      }
      else{
        var inactiveimage=this.categorylist[i].inactive_img;
        children[i].getElementsByTagName('label')[0].getElementsByTagName('img')[0].setAttribute("src", inactiveimage);
      }
    }
  }

  showfrom(){
    this.showfromprice=true;
  }

  showto(){
    this.showtoprice=true;
  }
}
