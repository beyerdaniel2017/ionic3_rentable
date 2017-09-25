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
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { MapModal } from '../modal-page/modal-page';
/*
  Generated class for the AlertdetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AlertdetailPage = (function () {
    function AlertdetailPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.map = MapModal;
        this.categorylist =
            [
                { title: 'category A', icon: 'md-color-filter', number: '20' },
                { title: 'category b', icon: 'md-color-palette', number: '30' },
                { title: 'category c', icon: 'md-compass', number: '40' },
                { title: 'category D', icon: 'md-contrast', number: '40' }
            ];
        this.langForm = new FormGroup({
            "langs": new FormControl({ value: 'rust', disabled: false })
        });
    }
    AlertdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPagePage');
    };
    AlertdetailPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(MapModal);
        modal.present();
    };
    AlertdetailPage.prototype.fromprice = function () {
    };
    AlertdetailPage.prototype.toprice = function () {
    };
    AlertdetailPage.prototype.doSubmit = function () {
    };
    return AlertdetailPage;
}());
AlertdetailPage = __decorate([
    Component({
        selector: 'page-alertdetail',
        templateUrl: 'alertdetail.html'
    }),
    __metadata("design:paramtypes", [NavController, ModalController, NavParams])
], AlertdetailPage);
export { AlertdetailPage };
//# sourceMappingURL=alertdetail.js.map