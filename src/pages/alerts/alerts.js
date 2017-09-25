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
import { AlertdetailPage } from '../alertdetail/alertdetail';
/*
  Generated class for the AlertsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AlertsPage = (function () {
    function AlertsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertdetail = AlertdetailPage;
        this.list =
            [
                { alertname: 'John', history: '24', startprice: '20', lastprice: '30', distance: '10', startduration: 'July 1', lastduration: 'July 10' },
                { alertname: 'name 2', history: 'last 2day', price: '40-50', range: '20 km', duration: 'July 12 - July 15' },
                { alertname: 'name 3', history: 'last 24hr', price: '20-30', range: '30 km', duration: 'July 16 - July 20' },
            ];
    }
    AlertsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertsPagePage');
    };
    return AlertsPage;
}());
AlertsPage = __decorate([
    Component({
        selector: 'page-alerts',
        templateUrl: 'alerts.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], AlertsPage);
export { AlertsPage };
//# sourceMappingURL=alerts.js.map