import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';


import { Login } from '../login/login';
import { Register } from '../register/register';

import { AuthenticateProvider } from '../../providers/authenticate/authenticate';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
  providers: [AuthenticateProvider]
})
export class LandingPage {
  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;

	login=Login;
	register=Register;
	phonenumber:any;
  countrycode: any;
  number:number;
  user:any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public alertCtrl: AlertController,
    public Authprovider: AuthenticateProvider
  ) {
    this.number=null;
    this.countrycode=61;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPagePage');
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

  }

  selectcode(){
    
  }

 /* async dolanding(){
  	console.log("rascal countrycode" + this.countrycode);
    this.phonenumber=this.countrycode + this.number;
    console.log("rascal phonenumber" + this.phonenumber);

    const appVerifier = this.recaptchaVerifier;
    console.log("rascal appVerifier " + appVerifier);
    const phoneNumberString = "+" + this.phonenumber;
    this.navCtrl.setRoot(Login);

    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then( confirmationResult => {

        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        let prompt = this.alertCtrl.create({
        title: 'Enter the Confirmation code',
        inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
        buttons: [
          { text: 'Cancel',
            handler: data => { console.log('Cancel clicked'); }
          },
          { text: 'Send',
            handler: data => {
              //this.navCtrl.setRoot(Login);
              confirmationResult.confirm(data.confirmationCode)
                .then(function (result) {
                  // User signed in successfully.
                  console.log(result.user);
                  console.log("rascal successfully");
                  this.navCtrl.setRoot(Login);
                  // ...
                }).catch(function (error) {
                  console.log("rascal failed");
                  // User couldn't sign in (bad verification code?)
                  // ...
                });
            }
          }
        ]
      });
      prompt.present();
    })
    .catch(function (error) {
      console.error("SMS not sent", error);
    });
  }*/
  dolanding(){
    /* this.user = {
      name: 'mumble',
      password: 1234567
    }*/
    this.user = {
      number: this.number
    }
    this.navCtrl.setRoot(Login);
		/*this.Authprovider.authenticate(this.user).then(data =>{
      if (data) {
        this.navCtrl.setRoot(Login);
      }
      else {
        console.log("else");
      }
    },err =>{
      console.log("err racal");
      this.navCtrl.setRoot(Register);
    });*/
	}
}
