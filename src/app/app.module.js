var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { allPages } from '../pages/common/declerations';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticateProvider } from '../providers/authenticate/authenticate';
var firebaseConfig = {
    apiKey: "AIzaSyDEee2UBVTNqMDLVqhtMeCBSmFb-VGLKKI",
    authDomain: "firechat-65d7f.firebaseapp.com",
    databaseURL: "https://firechat-65d7f.firebaseio.com",
    projectId: "firechat-65d7f",
    storageBucket: "firechat-65d7f.appspot.com",
    messagingSenderId: "342748824361"
};
var APP_Pages = [];
for (var i in allPages) {
    APP_Pages.push(allPages[i]);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            APP_Pages
        ],
        imports: [
            BrowserModule,
            HttpModule,
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFireAuthModule,
            IonicModule.forRoot(MyApp)
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            APP_Pages
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            AuthenticateProvider
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map