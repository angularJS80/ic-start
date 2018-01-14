import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database-deprecated";
//,FirebaseListObservable
//import * as firebase from 'firebase/app';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild('logContent') logContent:any;
  username:string='';
  message:string='';
  s ;
  messages:any[] ;
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private db:AngularFireDatabase, public menuCtrl:MenuController
  ) {
    console.log("constructor");
    this.username = this.navParams.get('username');

  }

  ionViewDidLoad() {
    if( this.messages ==null){
      this.messages=[];
      this.getChatDataLoad();
    }
    console.log(this.messages.length);
    console.log('ionViewDidLoad ChatPage');

  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.messages);
  }

  getChatDataLoad(){
    this.s = this.db.list('/bleLog').subscribe(
      data=>{
        this.messages = data;
        this.scrollToBottom();
        console.log(data);
      }

    );
  }

  scrollToBottom () {
    setTimeout (() => {
      console.log(this.logContent);
      try {
        this.logContent.scrollToBottom();
      }catch(exception){console.log("here BleFnListPage other page running"); }finally { }
    },500);
  }


  sendMessage() {
    this.db.list('/bleLog').push(
      {
        username:this.username
        ,message:this.message
      }
    )
    this.message='';
    console.log('ionViewDidLoad ChatPage');
  }

  menuOpne(){
    this.menuCtrl.open();
  }


}
