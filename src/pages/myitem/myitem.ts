import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Profile } from '../profile/profile';

/*
  Generated class for the MyitemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-myitem',
  templateUrl: 'myitem.html'
})
export class MyStats {

  profile=Profile;

  hexColor: string = '#8d8d9b';

  own_rent:any;
  money:String="out";
  individlist: Array<any>;
  monthlylsit: Array<any>;
  quarterlylsit:Array<any>;
  yearlylsit:Array<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.individlist =
    [
      { title: 'Cool sizes 9 shoes', price:'100', history:'2 days ago'},
      { title: 'Ride snowboard', price:'130', history:'3 days ago'},
      { title: '3 room tent', price:'200', history:'4 days ago'},
      { title: 'good watch', price:'250', history:'5 days ago'},
      { title: 'snow car', price:'310', history:'2 days ago'}
    ]
    this.monthlylsit =
    [
      { month: 'July, 2017', price:'100', history:'2 days ago'},
      { month: 'June, 2017', price:'130', history:'3 days ago'},
      { month: 'May, 2017', price:'200', history:'4 days ago'},
      { month: 'April, 2017', price:'250', history:'5 days ago'},
      { month: 'March, 2017', price:'310', history:'2 days ago'}
    ]
    this.quarterlylsit =
    [
      { month: 'July, 2017', price:'100', history:'2 days ago'},
      { month: 'June, 2017', price:'130', history:'3 days ago'},
      { month: 'May, 2017', price:'200', history:'4 days ago'},
      { month: 'April, 2017', price:'250', history:'5 days ago'},
      { month: 'March, 2017', price:'310', history:'2 days ago'}
    ]
    this.yearlylsit =
    [
      { month: 'July, 2017', price:'100', history:'2 days ago'},
      { month: 'June, 2017', price:'130', history:'3 days ago'},
      { month: 'May, 2017', price:'200', history:'4 days ago'},
      { month: 'April, 2017', price:'250', history:'5 days ago'},
      { month: 'March, 2017', price:'310', history:'2 days ago'}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyitemPagePage');
  }

  changecolor(){
    if(this.hexColor === '#ffffff') {
      this.hexColor = '#8d8d9b'
    } else {
      this.hexColor = '#ffffff'
    }
  }

  myFunction(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var parent = event.srcElement.parentElement;
    var preparent = parent.parentElement;
    var children = preparent.children;
    var count = children.length;
    var child_index;
    for (var i = 0; i < count; ++i) {
     
      var inactiveimage=children[i].getElementsByTagName('img')[0].getAttribute("data-inactive");
      console.log(children[i].getElementsByTagName('img')[0].getAttribute("data-inactive"));
      children[i].getElementsByTagName('img')[0].setAttribute("src", inactiveimage);
    }
    var image=parent.getElementsByTagName('img')[0].getAttribute("data-active");
    parent.getElementsByTagName('img')[0].setAttribute("src", image);


  }

}
