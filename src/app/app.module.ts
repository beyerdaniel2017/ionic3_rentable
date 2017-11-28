import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

import { allPages } from '../pages/common/declerations';
import { DirectivesModule } from '../directives/directives.module';
import { ValidatorsModule } from '../validators/validators.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { AppSetting } from '../providers/api_route';
import { PaymentProvider } from '../providers/payment/payment';
import { ProfileProvider } from '../providers/payment/prifile';
import { Itemprovider } from '../providers/items/postitem';
import { ItemsProvider } from '../providers/items/items';

const firebaseConfig = {
  apiKey: "AIzaSyDfySkoXoUcI9Ed39TNJwXnntSg8nKyt10",
  authDomain: "rental-335fb.firebaseapp.com",
  databaseURL: "https://rental-335fb.firebaseio.com",
  projectId: "rental-335fb",
  storageBucket: "rental-335fb.appspot.com",
  messagingSenderId: "637150074544"
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
    AppSetting,
    PaymentProvider,
    ProfileProvider,
    Itemprovider,
    FileTransfer,
//    FileUploadOptions,
    FileTransferObject,
    File,
    Camera,
    ItemsProvider
  ]
})
export class AppModule {}
