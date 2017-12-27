import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {NgModel} from "@angular/forms";
import {Observable} from "rxjs";
//import * as firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',

})
export class RegisterPage {



  @ViewChild('username') uname;
  @ViewChild('password') pword;

  @ViewChild('myModel') myModel:NgModel;


  //@ViewChild('myOtherModel')
  myOhterData:NgModel;

  myOhterData= {
    testinput1:'',
    testinput2:''
  }

  constructor(public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doRegister(){
    this.fire.auth.createUserAndRetrieveDataWithEmailAndPassword(this.uname.value,this.pword.value)
      .then(data=>{
          console.log('data:',data);
        }
      )
      .catch(error=>{
        console.log('error:',error);
      });

    /*if(this.uname.value=='admin'&& this.pword.value=='admin'){

     let alert = this.alertCtrl.create({
     title: 'New Friend!',
     subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
     buttons: ['OK']
     });
     alert.present();
     }*/
  }

  addValadate(){
    console.log(this.myOhterData );
  }

  ngOnInit() {
    this.myModel.valueChanges.subscribe(v=> console.log('v = '+v)); // 나중에 옵저버로 해보기
    this.myModel.statusChanges.subscribe(s=> console.log('s = '+s)); // 나중에 옵저버로 해보기

    console.log(this.myOhterData);
    //this.myOhterData.valueChanges.subscribe(v=> console.log('v = '+v)); // 나중에 옵저버로 해보기
    //this.myOhterData.statusChanges.subscribe(s=> console.log('s = '+s)); // 나중에 옵저버로 해보기

  }

}
