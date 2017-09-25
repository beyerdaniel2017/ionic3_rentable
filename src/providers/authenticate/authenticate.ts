import { Injectable, Inject } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

//firebase auth
import firebase from 'firebase';

import { Register } from '../../pages/register/register';


/*
  Generated class for the AuthenticateProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenticateProvider {

	isLoggedin: any;
	AuthToken: any;
	public fireAuth: any;
	public userData: any;

  constructor(
  	public http: Http,
  	public navCtrl: NavController
  	) {
  	this.isLoggedin = false;
  	this.AuthToken = null;
    this.fireAuth = firebase.auth();
	  this.userData = firebase.database().ref('/userData');
  }

  static get parameters() {
  	return [Http];
  }

  storeUserCredentials(token) {
  	window.localStorage.setItem('raja', token);
  	this.useCredentials(token);
  }

  useCredentials(token){
  	this.isLoggedin = true;
  	this.AuthToken = token;
  }

  loadUserCredentials(){
  	var token=window.localStorage.getItem('raja');
  	this.useCredentials(token);
  }

  destroyUserCredentials() {
  	this.isLoggedin = false;
  	this.AuthToken = null;
  	window.localStorage.clear();
  }

  authenticate(user) {
  	let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
	    this.http.post('http://localhost:3333/authenticate', user, {headers:headers})
	    .subscribe(data => {
	    	console.log(data + "rascal data");
	    	if(data.json().success){
	    		resolve(true);
		    }
	    },
	    err=> {
	    	reject(true);
	    });
    });
  }

  addNumber(user) {
  	let headers = new Headers();
  	console.log(user.number + "auth");
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
	    this.http.post('http://localhost:3333/addnumber', user, {headers:headers})
	    .subscribe(data => {
	    	if(data.json().success){
	    		this.storeUserCredentials(data.json().token);
	    		resolve(true);
		    }
		    else
		    	resolve(false);
	    });
    });
  }

  register(email: string, password: string): any {
	  return this.fireAuth.createUserWithEmailAndPassword(email, password)
	    .then((newUser) => {
	      this.userData.child(newUser.uid).set({email: email});
	    });
	}

}
