import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Details } from '../details/details';


@Component({
  selector: 'page-likes',
  templateUrl: 'likes.html'
})
export class Likes {

  list: Array<any>;
  details = Details;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list=[{img: 'assets/img/11.png', title: 'Stylish house'}, {img: 'assets/img/22.png', title: 'Big Houses'}, {img: 'assets/img/33.png', title: 'Big Houses'}, {img: 'assets/img/11.png', title: 'Stylish house'},{img: 'assets/img/11.png', title: 'Stylish house'}, {img: 'assets/img/22.png', title: 'Big Houses'}, {img: 'assets/img/33.png', title: 'Big Houses'}, {img: 'assets/img/11.png', title: 'Stylish house'}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LikesPage');
  }

}
