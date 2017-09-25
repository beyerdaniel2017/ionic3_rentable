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
import { List } from '../list/list';
import { MapModal } from '../modal-page/modal-page';
import { Profile } from '../profile/profile';
import { SearchPage } from '../search/search';
import { Details } from '../details/details';
var Home = (function () {
    function Home(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.profile = Profile;
        this.search = SearchPage;
        this.list = List;
        this.details = Details;
        this.expanded = true;
        this.grid = [{ img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline' }, { img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline' }, { img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset' }];
        this.categorylist = [{ img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline' }, { img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline' }, { img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset' }];
        this.neargrid = [{ img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline' }, { img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline' }, { img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset' }];
        this.categorygrid = [{ img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline', price: '20', favourity: '21' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline', price: '12', favourity: '11' }, { img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline', price: '12', favourity: '34' }, { img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline', price: '32', favourity: '21' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price: '31', favourity: '15' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price: '34', favourity: '65' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price: '42', favourity: '23' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price: '20', favourity: '21' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price: '20', favourity: '21' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price: '20', favourity: '21' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price: '20', favourity: '21' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price: '20', favourity: '21' }];
    }
    Home.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(MapModal);
        modal.present();
    };
    return Home;
}());
Home = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ModalController])
], Home);
export { Home };
//# sourceMappingURL=home.js.map