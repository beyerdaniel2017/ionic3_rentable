import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from '../api_route';

@Injectable()
export class Itemprovider {

  apiUrl = this.appSettings.getApiURL();

  constructor(public http: Http, public appSettings: AppSetting) {
  	this.http=http;
    console.log('Hello PaymentProvider Provider');
  }

  public Itemsave(fairprice,
      dailyprice,
      weeklyprice,
      fee,
      saturation,
      distance,
      deliver,
      itemtitle,
      category,
      conditionmark,
      conditiontitle){
    return this.http.post(this.apiUrl+'item/saveitem', {'itemdetail':fairprice});
  }

  public Getprofile(){
    return this.http.get(this.apiUrl+'user/getprofile');
  }

}
