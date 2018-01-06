import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";

import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule, AngularFireAuth} from "angularfire2/auth";
import {Ionic2MaskDirective} from "ionic2-mask-directive";
import {LoggedinPage} from "../pages/loggedin/loggedin";
import { BLE } from '@ionic-native/ble';

import * as firebase from 'firebase';
import {BlefnlistPage} from "../pages/blefnlist/blefnlist";
import {BleeqlistPage} from "../pages/bleeqlist/bleeqlist";

// Initialize Firebase
const firebaseAuth= {
  apiKey: "AIzaSyCVovQE5tMaatFfj98oyyjqeaVpoQzqPXA",
  authDomain: "tutoralnavi3.firebaseapp.com",
  databaseURL: "https://tutoralnavi3.firebaseio.com",
  projectId: "tutoralnavi3",
  storageBucket: "tutoralnavi3.appspot.com",
  messagingSenderId: "188830952888"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    Ionic2MaskDirective,
    BlefnlistPage,
    BleeqlistPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    BlefnlistPage,
    BleeqlistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BLE

    ]
})
export class AppModule {

   test(){
  console.log(firebase.SDK_VERSION);
}

}
