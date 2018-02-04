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
import {AngularFireDatabaseModule} from "angularfire2/database-deprecated";
import {Ionic2MaskDirective} from "ionic2-mask-directive";
//import {LoggedinPage} from "../pages/loggedin/loggedin";
import { BLE } from '@ionic-native/ble';

import * as firebase from 'firebase';
//import {BlefnlistPage} from "../pages/blefnlist/blefnlist";
//import {BleeqlistPage} from "../pages/bleeqlist/bleeqlist";
import {CRC} from "../util/CRC";
//import {MainPage} from "../pages/main/main";
import {ChatPage} from "../pages/chat/chat";

// Initialize Firebase
const firebaseAuth = {
  apiKey: "AIzaSyCVh5eTAp7HZhnak_uAoS-LvK3xHqXt9lM",
  authDomain: "ionic-chat-project-ace74.firebaseapp.com",
  databaseURL: "https://ionic-chat-project-ace74.firebaseio.com",
  projectId: "ionic-chat-project-ace74",
  storageBucket: "ionic-chat-project-ace74.appspot.com",
  messagingSenderId: "644376250918"
};



@NgModule({
  declarations: [
    MyApp,
//    MainPage,
    HomePage,
    LoginPage,
    RegisterPage,
    //LoggedinPage,
    Ionic2MaskDirective,
//    BlefnlistPage,
//    BleeqlistPage,
    ChatPage,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        android: {
          menuType: 'overlay',
        }
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
 //   MainPage,
    HomePage,
    LoginPage,
    RegisterPage,
    //LoggedinPage,
//    BlefnlistPage,
//    BleeqlistPage,
    ChatPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BLE,
    CRC
    ]
})
export class AppModule {

   test(){
  console.log(firebase.SDK_VERSION);
}

}
