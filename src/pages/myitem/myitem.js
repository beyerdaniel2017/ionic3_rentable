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
/*
  Generated class for the MyitemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var MyStats = /** @class */ (function () {
    function MyStats(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = Profile;
        this.hexColor = '#8d8d9b';
        this.money = "out";
        this.intimeline = "individual";
        this.outtimeline = "individual";
        this.individlist =
            [
                { title: 'Cool sizes 9 shoes', price: '10', history: '2 days ago' },
                { title: 'Ride snowboard', price: '130', history: '3 days ago' },
                { title: '3 room tent', price: '20', history: '4 days ago' },
                { title: 'good watch', price: '250', history: '5 days ago' },
                { title: 'snow car', price: '31', history: '2 days ago' }
            ];
        this.monthlylsit =
            [
                { month: 'July', price: '100', year: '2017', enddate: '31' },
                { month: 'June', price: '130', year: '2017', enddate: '3' },
                { month: 'May', price: '200', year: '2017', enddate: '31' },
                { month: 'April', price: '250', year: '2017', enddate: '30' },
                { month: 'March', price: '310', year: '2017', enddate: '31' }
            ];
        this.quarterlylsit =
            [
                { quarterstart: 'January ', quarterend: 'March', price: '400', year: '2017', enddate: '31' },
                { quarterstart: 'April', quarterend: 'June', price: '437', year: '2017', enddate: '30' },
                { quarterstart: 'July', quarterend: 'September', price: '600', year: '2017', enddate: '30' },
                { quarterstart: 'October', quarterend: 'December', price: '2436', year: '2017', enddate: '31' }
            ];
        this.yearlylsit =
            [
                { year: '2017', price: '1000' },
                { year: '2016', price: '1300' },
                { year: '2015', price: '2000' },
                { year: '2014', price: '2500' },
                { year: '2013', price: '3100' }
            ];
    }
    MyStats.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyitemPagePage');
    };
    MyStats.prototype.changecolor = function () {
        if (this.hexColor === '#ffffff') {
            this.hexColor = '#8d8d9b';
        }
        else {
            this.hexColor = '#ffffff';
        }
    };
    MyStats.prototype.myFunction = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var parent = event.srcElement.parentElement;
        var preparent = parent.parentElement;
        var children = preparent.children;
        var count = children.length;
        var child_index;
        for (var i = 0; i < count; ++i) {
            var inactiveimage = children[i].getElementsByTagName('img')[0].getAttribute("data-inactive");
            console.log(children[i].getElementsByTagName('img')[0].getAttribute("data-inactive"));
            children[i].getElementsByTagName('img')[0].setAttribute("src", inactiveimage);
        }
        var image = parent.getElementsByTagName('img')[0].getAttribute("data-active");
        parent.getElementsByTagName('img')[0].setAttribute("src", image);
    };
    MyStats = __decorate([
        Component({
            selector: 'page-myitem',
            templateUrl: 'myitem.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MyStats);
    return MyStats;
}());
export { MyStats };
//# sourceMappingURL=myitem.js.map