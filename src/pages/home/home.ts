import {Component, NgZone} from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";

import {BleeqlistPage} from "../bleeqlist/bleeqlist";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {



  constructor(public navCtrl: NavController,public popoverCtrl:PopoverController) {

  }



  moveSignIn(){
    this.navCtrl.push(LoginPage);

  }

  moveRegister(){
    this.navCtrl.push(RegisterPage)
  }

  moveBleeqlist(){
    this.navCtrl.push(BleeqlistPage)
  }

  popBleeqlist() {
    let popover = this.popoverCtrl.create(BleeqlistPage);
    popover.present();
  }

}
