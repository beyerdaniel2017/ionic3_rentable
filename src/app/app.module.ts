import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
import { HTTP } from '@ionic-native/http';

import { allPages } from '../pages/common/declerations';
import { DirectivesModule } from '../directives/directives.module';
import { ValidatorsModule } from '../validators/validators.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { AppSetting } from '../providers/api_route';

const firebaseConfig = {
  apiKey: "AIzaSyDt_BaO5QxQo3mr8XaigDsoVnPtPn05ejg",
  authDomain: "angular2firebase-e2368.firebaseapp.com",
  databaseURL: "https://angular2firebase-e2368.firebaseio.com",
  projectId: "angular2firebase-e2368",
  storageBucket: "angular2firebase-e2368.appspot.com",
  messagingSenderId: "678978519421"
};

var APP_Pages = [];
  for(let i in allPages){
    APP_Pages.push(allPages[i]);
  }

@NgModule({
  declarations: [
    MyApp,
    APP_Pages
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DirectivesModule,
    ValidatorsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
     IonicModule.forRoot(MyApp, {
      backButtonText: '',
      pageTransition: '',
    }
  )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     APP_Pages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DirectivesModule,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticateProvider,
    AppSetting
  ]
})
export class AppModule {}
