import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, AbstractControl  } from '@angular/forms';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';

import { Home } from '../home/home';
import { SignupPage } from '../signup/signup';
import { FinishsignPage } from '../finishsign/finishsign';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AuthenticateProvider]
})
export class Register {

  signup = SignupPage;
  finishsign=FinishsignPage;
  digitcode:AbstractControl;

  formgroup: FormGroup;
  phonenumber:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public Authprovider: AuthenticateProvider
    ) {

  	this.formgroup = formBuilder.group({
        digitcode: ['', Validators.compose([Validators.required, Validators.minLength(4) ])]
    });

    this.digitcode=this.formgroup.controls['digitcode'];
    this.phonenumber=navParams.get("pnumber");
  }

  gosignup(){
    this.Authprovider.smsverify(this.phonenumber,this.digitcode.value);
    console.log(this.digitcode.value);
    console.log(this.phonenumber);
    this.navCtrl.setRoot(SignupPage);
  }

}
