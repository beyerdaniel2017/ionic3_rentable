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
import { PostcostPage } from '../postcost/postcost';
import { AddPage } from '../add/add';
/**
 * Generated class for the PostdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PostdetailPage = (function () {
    function PostdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postcost = PostcostPage;
        this.addpage = AddPage;
        this.goodcondition = [1, 2, 3, 4];
        this.badcondition = [1];
    }
    PostdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostdetailPage');
    };
    return PostdetailPage;
}());
PostdetailPage = __decorate([
    Component({
        selector: 'page-postdetail',
        templateUrl: 'postdetail.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], PostdetailPage);
export { PostdetailPage };
//# sourceMappingURL=postdetail.js.map