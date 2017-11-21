import { Injectable, Inject } from '@angular/core';
//import { HTTP } from '@ionic-native/http';
import { Http,Headers } from '@angular/http';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AppSetting } from '../api_route';
import firebase from 'firebase';
import { Register } from '../../pages/register/register';

@Injectable()
export class AuthenticateProvider {

  apiUrl = this.appSettings.getApiURL();
  
  constructor(public http: Http, public appSettings: AppSetting) {
    this.http = http;
    // code...
  }
  public Sendsms(smsnumber) {
    return this.http.post(this.apiUrl+'sendsms', {'phoneNumber': smsnumber})
    .subscribe(data => {console.log(data);})      
  }

  public smsverify(smsnumber, digitcode){
    console.log("smsverify");
    return this.http.post(this.apiUrl+'smsverify', {'phoneNumber': smsnumber, 'code':digitcode})
    .subscribe(data => {console.log(data);})
  }
}