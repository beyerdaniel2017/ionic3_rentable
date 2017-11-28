import { Component,Renderer, ElementRef } from '@angular/core';
import { NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { KeyboardDirective } from '../../directives/keyboard/keyboard';
import { File } from '@ionic-native/file';
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
  imageURI:any;
  imageFileName:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public profileprovider: ProfileProvider,
      private transfer: FileTransfer,
      private camera: Camera,
      public loadingCtrl: LoadingController,
      public toastCtrl: ToastController
    ) {
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

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }


  updatephoto(){


  }

}
