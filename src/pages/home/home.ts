import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  moveSignIn(){
    this.navCtrl.push(LoginPage);

  }

  moveRegister(){
    this.navCtrl.push(RegisterPage)
  }

}
