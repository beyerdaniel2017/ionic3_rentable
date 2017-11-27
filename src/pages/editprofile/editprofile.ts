import { Component,Renderer, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KeyboardDirective } from '../../directives/keyboard/keyboard';
import { ProfileProvider } from '../../providers/payment/prifile';

import { Profile } from '../profile/profile';
import { ProfileinputPage } from '../profileinput/profileinput';


/*
  Generated class for the EditprofilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {

	editprofile:any;
  profile=Profile;
  firstname:any;
  lastname:any;
  email:any;
  phonenumber:any;
  password:any;
  postalcode:any;
  type:any;
  showpassword:any;
  Profiledata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileprovider: ProfileProvider) {
  	this.editprofile ={
      img: 'assets/img/profile-img.png', name: 'John Doe', address:'Sydney Australia', rate:'4.5', rent_nuber: '10', owner_number: '20'
    }

    this.Profiledata=this.profileprovider.Getprofile();

    // this.type=navParams.get("type");
    // if(this.type=="FIRST NAME"){
    //   this.firstname=navParams.get("data");
    // }
    // if(this.type=="LAST NAME"){
    //   this.lastname=navParams.get("data");
    // }
    // if(this.type=="MOBILE NUMBER"){
    //   this.phonenumber=navParams.get("data");
    // }
    // if(this.type=="EMAIL"){
    //   this.email=navParams.get("data");
    // }
    // if(this.type=="PASSWORD"){
    //   this.password=navParams.get("data");
    //   this.showpassword="......";
    // }
    // if(this.type=="POSTAL CODE"){
    //   this.postalcode=navParams.get("data");
    // }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePagePage');

  }

  firstfocus(){
    this.navCtrl.push(ProfileinputPage,{
      type: "FIRST NAME"
    })
   }

  lastfocus(){
    this.navCtrl.push(ProfileinputPage,{
      type: "LAST NAME"
    })
  }

  mobilefocus(){
   this.navCtrl.push(ProfileinputPage,{
      type: "MOBILE NUMBER"
    })
  }

  emailfocus(){
    this.navCtrl.push(ProfileinputPage,{
      type: "EMAIL"
    })
  }

  passwordfocus(){
     this.navCtrl.push(ProfileinputPage,{
      type: "PASSWORD"
    })
  }

  
  postalfocus(){
    this.navCtrl.setRoot(ProfileinputPage,{
      type: "POSTAL CODE"
    })
  }

}
