import { Component, HostBinding, ElementRef,ContentChild,Directive } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddpaymentPage } from '../addpayment/addpayment';


/*
  Generated class for the CreditPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-credit',
  templateUrl: 'credit.html',
})
export class CreditPage {

  public type = 'password';
  public showPass = false;
  name: String;
  cardnumber: String;
  addpayment=AddpaymentPage;
  iscard:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.iscard=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditPagePage');
  }

  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  fromprice(){

  }

  f(){
    console.log(this.cardnumber+ "cardnumber");
    if(this.cardnumber=="4"){
      this.iscard=true;
    }
    if(this.cardnumber=="51" || this.cardnumber=="55"){
      this.iscard=false;
    }
  }

  removename(){
    this.name="";
  }

  removenumber(){
    this.cardnumber="";
  }

  cleardate(){

  }

  selectyear($event){
    
  }

  save(){
    
  }

  toggleShow(){

  }

}
