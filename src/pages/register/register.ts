import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, AbstractControl  } from '@angular/forms';

import { Home } from '../home/home';
import { SignupPage } from '../signup/signup';
import { FinishsignPage } from '../finishsign/finishsign';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {

  signup = SignupPage;
  finishsign=FinishsignPage;
  digitcode:AbstractControl;

  formgroup: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {

  	this.formgroup = formBuilder.group({
        digitcode: ['', Validators.compose([Validators.required, Validators.minLength(4) ])]
    });

    this.digitcode=this.formgroup.controls['digitcode'];
  }

}
