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
/*import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Calendar } from '@ionic-native/calendar';*/
import { FormGroup, FormControl } from '@angular/forms';
import { MapModal } from '../modal-page/modal-page';
import { SearchresultPage } from '../searchresult/searchresult';
/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SearchPage = (function () {
    function SearchPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.map = MapModal;
        this.searchresult = SearchresultPage;
        this.showfromprice = false;
        this.showtoprice = false;
        this.categorylist =
            [
                { title: 'category A', icon: 'md-color-filter', number: '20' },
                { title: 'category b', icon: 'md-color-palette', number: '30' },
                { title: 'category c', icon: 'md-compass', number: '40' },
                { title: 'category D', icon: 'md-contrast', number: '40' }
            ];
        this.newcategorylist =
            [
                { title: 'category A', icon: 'md-color-filter', image: 'url(../assets/icon/ico-home_1.png)',
                    number: '20', id: 'A', value: 'apple' },
                { title: 'category b', icon: 'md-color-palette', number: '30', id: 'B', value: 'near' },
                { title: 'category c', icon: 'md-compass', number: '40', id: 'C', value: 'TV' },
                { title: 'category D', icon: 'md-contrast', number: '40', id: 'D', value: 'car' }
            ];
        this.langForm = new FormGroup({
            "langs": new FormControl({ value: 'rust', disabled: false })
        });
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPagePage');
    };
    SearchPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(MapModal);
        modal.present();
    };
    SearchPage.prototype.fromprice = function () {
    };
    SearchPage.prototype.toprice = function () {
    };
    SearchPage.prototype.doSubmit = function () {
    };
    SearchPage.prototype.wifiApSelected = function () {
    };
    SearchPage.prototype.showfrom = function () {
        this.showfromprice = true;
    };
    SearchPage.prototype.showto = function () {
        this.showtoprice = true;
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Component({
        selector: 'page-search',
        templateUrl: 'search.html'
    }),
    __metadata("design:paramtypes", [NavController, ModalController, NavParams])
], SearchPage);
export { SearchPage };
//# sourceMappingURL=search.js.map