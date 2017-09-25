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
import { RentPage } from '../rent/rent';
/*
  Generated class for the RejectPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var RejectPage = (function () {
    function RejectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rent = RentPage;
        this.tracks = [];
        this.isremove = false;
        this.rejectreason = [{ reason: 'Item is broken', icon: 'ios-bug-outline' }, { reason: 'I am away', icon: 'ios-plane-outline' }, { reason: 'Item is broken', icon: 'ios-plane-outline' }, { reason: 'I am away', icon: 'ios-plane-outline' }, { reason: 'I am away', icon: 'ios-plane-outline' }, { reason: 'I am away', icon: 'ios-plane-outline' }];
    }
    RejectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RejectPagePage');
    };
    RejectPage.prototype.toggle = function () {
    };
    return RejectPage;
}());
RejectPage = __decorate([
    Component({
        selector: 'page-reject',
        templateUrl: 'reject.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], RejectPage);
export { RejectPage };
//# sourceMappingURL=reject.js.map