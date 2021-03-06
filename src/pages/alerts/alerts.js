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
var AlertsPage = /** @class */ (function () {
    function AlertsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertdetail = AlertdetailPage;
        this.list =
            [
                { alertname: 'John', history: '24', startprice: '20', lastprice: '30', distance: '10', startduration: 'July 1', lastduration: 'July 10' },
                { alertname: 'name 2', history: '2', startprice: '40', lastprice: '50', distance: '20', startduration: 'July 6', lastduration: 'July 14' },
                { alertname: 'name 3', history: '24', startprice: '24', lastprice: '32', distance: '30', startduration: 'July 14', lastduration: 'July 23' },
            ];
        this.alert_opportunity = "alert";
    }
    AlertsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertsPagePage');
    };
    AlertsPage = __decorate([
        Component({
            selector: 'page-alerts',
            templateUrl: 'alerts.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], AlertsPage);
    return AlertsPage;
}());
export { AlertsPage };
//# sourceMappingURL=alerts.js.map