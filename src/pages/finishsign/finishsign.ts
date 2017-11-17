import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';

import { TabPage } from '../tab/tab';
import { SignupPage } from '../signup/signup';
import { Register } from '../register/register';

@Component({
  selector: 'page-finishsign',
  templateUrl: 'finishsign.html'
})
export class FinishsignPage {

	home=TabPage;
  signup=SignupPage;
  register=Register;

  finishsignupform:FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
  ) {
    this.finishsignupform = formBuilder.group({
      firstname: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(10), Validators.required])],
      lastname: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(10), Validators.required])],
      postalcode: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(10), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishsignPagePage');
  }

}
