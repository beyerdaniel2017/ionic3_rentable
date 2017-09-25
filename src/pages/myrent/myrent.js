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
import { Likes } from '../likes/likes'; //favourites screen
import { Details } from '../details/details';
var Myrent = (function () {
    function Myrent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.own_rent = "own";
        this.date = "current";
        this.isavailable = "available";
        this.favourites = Likes;
        this.details = Details;
        this.list = [{ img: 'assets/img/11.png', title: 'Stylish house' }, { img: 'assets/img/22.png', title: 'Big Houses' }, { img: 'assets/img/33.png', title: 'Big Houses' }, { img: 'assets/img/11.png', title: 'Stylish house' }, { img: 'assets/img/11.png', title: 'Stylish house' }, { img: 'assets/img/22.png', title: 'Big Houses' }, { img: 'assets/img/33.png', title: 'Big Houses' }, { img: 'assets/img/11.png', title: 'Stylish house' }];
        this.own_avaiablelist =
            [
                { img: 'assets/img/11.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/22.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/33.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/11.png', title: 'John', view: '10', favourity: '20' },
            ];
        this.own_rentedlist =
            [
                { img: 'assets/img/11.png', title: 'apartment', profileimage: 'assets/img/profile-img.png', profilename: 'John', delete: 'yes', rentday: '5' },
                { img: 'assets/img/22.png', title: 'wedding', profileimage: 'assets/img/profile-img.png', profilename: 'rascal', delete: 'yes', rentday: '2' },
                { img: 'assets/img/33.png', title: 'shop', profileimage: 'assets/img/profile-img.png', profilename: 'sizza', delete: 'yes', rentday: '3' }
            ];
        this.rent_currentlist =
            [
                { img: 'assets/img/11.png', title: 'apartment', profileimage: 'assets/img/profile-img.png', profilename: 'John', delete: 'yes', },
                { img: 'assets/img/22.png', title: 'wedding', profileimage: 'assets/img/profile-img.png', profilename: 'rascal', delete: 'yes', },
                { img: 'assets/img/33.png', title: 'shop', profileimage: 'assets/img/profile-img.png', profilename: 'sizza', delete: 'yes', }
            ];
        this.rent_historylist =
            [
                { img: 'assets/img/11.png', title: 'apartment', profileimage: 'assets/img/profile-img.png', profilename: 'John', delete: 'yes', },
                { img: 'assets/img/22.png', title: 'wedding', profileimage: 'assets/img/profile-img.png', profilename: 'rascal', delete: 'yes', },
                { img: 'assets/img/33.png', title: 'shop', profileimage: 'assets/img/profile-img.png', profilename: 'sizza', delete: 'yes', }
            ];
    }
    return Myrent;
}());
Myrent = __decorate([
    Component({
        selector: 'page-myrent',
        templateUrl: 'myrent.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], Myrent);
export { Myrent };
//# sourceMappingURL=myrent.js.map