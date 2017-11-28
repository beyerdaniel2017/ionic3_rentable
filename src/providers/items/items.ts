import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from '../api_route';

/*
  Generated class for the ItemsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ItemsProvider {

	apiUrl=this.appsetting.getApiURL();

  constructor(public http: Http,public appsetting: AppSetting) {
  	this.http=http;
    console.log('Hello ItemsProvider Provider');
  }

  public Getitems(){
    return this.http.get(this.apiUrl+'item/getitem');
  }

  public addfavourity(itemnumber){
    return this.http.post(this.apiUrl+'item/addfavourity', {item: itemnumber});
  }

  public Alertsave(alerttitle, category, location, date, fromprice, toprice, distance, within, sortby){
    return this.http.post(this.apiUrl+'item/alertsave', {alerttitle: alerttitle, category:category, location: location,date:date, fromprice:fromprice, toprice:toprice, distance:distance,within:within, sortby:sortby});
    
  }

  public Searchsave(category, location, date, fromprice, toprice, distance, within, sortby){
    return this.http.post(this.apiUrl+'item/searchsave', {category:category, location: location,date:date, fromprice:fromprice, toprice:toprice, distance:distance,within:within, sortby:sortby});
  }

}
