import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup  } from '@angular/forms';

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
  digitcode:any;

  slideOneForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
  	this.digitcode="";

  	this.slideOneForm = formBuilder.group({
        digitcode: ['']
    });
  }

  codelimit(){
  	
  }

}
