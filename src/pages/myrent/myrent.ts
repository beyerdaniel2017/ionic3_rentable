import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Likes } from '../likes/likes';      //favourites screen
import { Details } from '../details/details';


@Component({
  selector: 'page-myrent',
  templateUrl: 'myrent.html'
})
export class Myrent {

  own_avaiablelist: Array<any>;
  own_rentedlist: Array<any>;
  rent_currentlist: Array<any>;
  rent_historylist: Array<any>;
  list:Array<any>;

  own_rent:string="own";
  date:string="current";
  isavailable:string="available";
  showdeleteicon:boolean;

  favourites=Likes;
  details=Details;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.list=[{img: 'assets/img/11.png', title: 'Stylish house'}, {img: 'assets/img/22.png', title: 'Big Houses'}, {img: 'assets/img/33.png', title: 'Big Houses'}, {img: 'assets/img/11.png', title: 'Stylish house'},{img: 'assets/img/11.png', title: 'Stylish house'}, {img: 'assets/img/22.png', title: 'Big Houses'}, {img: 'assets/img/33.png', title: 'Big Houses'}, {img: 'assets/img/11.png', title: 'Stylish house'}]

    this.showdeleteicon=true;

    this.own_avaiablelist =
    [
      {img: 'assets/img/11.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/22.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/33.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/11.png', title: 'John', view:'10', favourity:'20'},
    ]

    this.own_rentedlist =
    [
      {img: 'assets/img/11.png', title: 'apartment', profileimage:'assets/img/profile-img.png', profilename:'John', delete:'yes', rentday:'5'},
      {img: 'assets/img/22.png', title: 'wedding', profileimage:'assets/img/profile-img.png', profilename:'rascal', delete:'yes',  rentday:'2'},
      {img: 'assets/img/33.png', title: 'shop', profileimage:'assets/img/profile-img.png', profilename:'sizza', delete:'yes', rentday:'3' }
    ]

    this.rent_currentlist =
    [
      {img: 'assets/img/11.png', title: 'apartment', profileimage:'assets/img/profile-img.png', profilename:'John', delete:'yes', },
      {img: 'assets/img/22.png', title: 'wedding', profileimage:'assets/img/profile-img.png', profilename:'rascal', delete:'yes', },
      {img: 'assets/img/33.png', title: 'shop', profileimage:'assets/img/profile-img.png', profilename:'sizza', delete:'yes', }
    ]

    this.rent_historylist =
    [
      {img: 'assets/img/11.png', title: 'apartment', profileimage:'assets/img/profile-img.png', profilename:'John', delete:'yes', },
      {img: 'assets/img/22.png', title: 'wedding', profileimage:'assets/img/profile-img.png', profilename:'rascal', delete:'yes', },
      {img: 'assets/img/33.png', title: 'shop', profileimage:'assets/img/profile-img.png', profilename:'sizza', delete:'yes', }
    ]
  }

  /*removeItem(item){
    for(var i = 0; i < this.list.length; i++) {
 
      if(this.list[i] == item){
        this.list.splice(i, 1);
      }
 
    }
  }*/

  showdelete(){
    this.showdeleteicon=!this.showdeleteicon;
  }
}
