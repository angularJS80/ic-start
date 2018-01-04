import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {LoggedinPage} from "../loggedin/loggedin";

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

  constructor(public fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ctrlAlert(title,msg){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  doSignIn(){
    this.fire.auth.signInWithEmailAndPassword(this.uname.value+'@domain.xta',this.pword.value)
      .then(data=>{
          console.log('data:',this.fire.auth.currentUser);
          this.ctrlAlert('info','login success!');
          this.navCtrl.setRoot(LoggedinPage);

        }
      )
      .catch(error=>{
        console.log('error:',error);
        this.ctrlAlert('info',error.message);
      });

    /*if(this.uname.value=='admin'&& this.pword.value=='admin'){


     }*/
  }

}
