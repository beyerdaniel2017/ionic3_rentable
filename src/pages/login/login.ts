import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Register } from '../register/register';
import { Home } from '../home/home';

import { MenuPage } from '../menu/menu';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  expanded: Boolean;
  register = Register ;
  home = MenuPage;
  name:String;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.expanded = true;
    this.name="Matias";
  }

  login(){
    this.navCtrl.setRoot(MenuPage);
  }

  forgotPassword() {
    let prompt = this.alertCtrl.create({
      title: 'Forgot Password',
      message: "Enter your email address and we'll help you reset your password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
