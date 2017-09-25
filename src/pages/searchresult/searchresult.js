var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../profile/profile';
import { SearchPage } from '../search/search';
import { Details } from '../details/details';
/*
  Generated class for the SearchresultPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SearchresultPage = (function () {
    function SearchresultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = Profile;
        this.search = SearchPage;
        this.details = Details;
        /*   this.categorylist = [{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'}]
        */
        this.categorylist = [{ img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline', price: '20' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline', price: '22' }, { img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline', price: '30' }, { img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline', price: '20' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price: '27' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price: '60' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price: '39' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price: '43' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price: '31' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price: '34' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price: '13' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price: '20' }];
    }
    SearchresultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchresultPagePage');
    };
    return SearchresultPage;
}());
SearchresultPage = __decorate([
    Component({
        selector: 'page-searchresult',
        templateUrl: 'searchresult.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], SearchresultPage);
export { SearchresultPage };
//# sourceMappingURL=searchresult.js.map