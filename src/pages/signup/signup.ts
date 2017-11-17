import { Component } from '@angular/core';
import { NavController, NavParams,AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';

import { FinishsignPage } from '../finishsign/finishsign';
import { Register } from '../register/register';

import { AuthenticateProvider } from '../../providers/authenticate/authenticate';

/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

	finishsign=FinishsignPage;
  register=Register;
  email: any;
  password: any;
  confirmpassword:any;
  registerForm:FormGroup;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  fullnameChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public Authprovider: AuthenticateProvider,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP),Validators.maxLength(80)])],
      password: ['', Validators.compose([Validators.maxLength(50),Validators.minLength(10), Validators.required])],
      confirmpassword: ['', Validators.compose([Validators.minLength(10), Validators.required,Validators.maxLength(50)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPagePage');
  }

  elementChanged(input){
    let field = input.inputControl;
    this[field + "Changed"] = true;
  }

  facebook(){

  }

  doRegister(){
    this.navCtrl.setRoot(FinishsignPage);
    /*this.submitAttempt = true;
    if (!this.registerForm.valid){
      console.log(this.registerForm.value);
    } else {
      this.Authprovider.register(this.registerForm.value.email, this.registerForm.value.password).then( Authprovider => {
        this.navCtrl.setRoot(FinishsignPage);
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }*/
  }

}
