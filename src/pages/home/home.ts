import {Component} from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  constructor(public navCtrl: NavController,public popoverCtrl:PopoverController) {

  }
  let saveParams;
  public getSaveParam(){
    return this.saveParams;
  }

  public setSaveParam(params:any){
    this.saveParams =  params;
  }


}
