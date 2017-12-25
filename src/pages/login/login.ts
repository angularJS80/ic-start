import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  @ViewChild('username') uname;
  @ViewChild('password') pword;

  constructor( public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doSignIn(){
    /*if(this.uname.value=='admin'&& this.pword.value=='admin'){

     let alert = this.alertCtrl.create({
     title: 'New Friend!',
     subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
     buttons: ['OK']
     });
     alert.present();
     }*/
  }

}
