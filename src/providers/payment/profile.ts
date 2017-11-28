import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from '../api_route';

@Injectable()
export class ProfileProvider {

  apiUrl = this.appSettings.getApiURL();

  constructor(public http: Http, public appSettings: AppSetting) {
  	this.http=http;
    console.log('Hello PaymentProvider Provider');
  }

  public ChangeProfile(profiletype, profilevalue){
    return this.http.post(this.apiUrl+'user/updateprofile', {profiletype: profiletype});
  }

  public Getprofile(){
    return this.http.get(this.apiUrl+'user/getprofile');
  }

}