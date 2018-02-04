import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
//import {BleeqlistPage} from "../pages/bleeqlist/bleeqlist";
//import {BlefnlistPage} from "../pages/blefnlist/blefnlist";
import {ChatPage} from "../pages/chat/chat";
import {RegisterPage} from "../pages/register/register";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any,saveParams:any}>;
  stackPages:Array<{page:any, params: any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage ,saveParams:{test:1234}},
      { title: 'Register', component: RegisterPage ,saveParams:{test:1234}},
      { title: 'Login', component: LoginPage ,saveParams:{test:1234}},
  //    { title: 'BleEqList', component: BleeqlistPage ,saveParams:{test:1234}},
  //    { title: 'BleFnList', component: BlefnlistPage ,saveParams:{test:1234}},
      { title: 'BleLog', component: ChatPage ,saveParams:{test:1234}}

    ];


  }

  ngOnInit() {
    this.nav.setRoot(HomePage);

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    /*
    this.pages.forEach(page=>{
      console.log(page);
      this.nav.push(page.component);// 뒷페이지가 가능한 이동..
    });
    this.nav.pop(page); // 바로 뒷페이지만..
*/

    //noinspection TypeScriptValidateTypes

    // 뒤로가기시에 현제페이지의 데이터를 저장해야 한다.
    /*let currentPage = this.pages.filter(item => {
      return  item.component.name == this.nav.getActive().name
    })[0];
    currentPage.saveParams = 3333;

    console.log(currentPage.component.getSaveParam());
    currentPage.component.setSaveParam({});
    console.log(currentPage);


    // 메뉴진입시에는 해당 페애지에서 가지고 있던 파라메터를 가져온다.
    let nestPage = this.pages.filter(item => {
      return  item.component.name == page.component.name
    })[0]
    console.log(nestPage);*/
    console.log("OpenP")
    this.nav.push(page.component);
    console.log(this.nav)
  }


}

