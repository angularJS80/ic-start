import {Component, NgZone} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {BLE} from "@ionic-native/ble";
import {BleeqlistPage} from "../bleeqlist/bleeqlist";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  Utf8ArrayToStr(arrayBuffer:ArrayBuffer ,service_uuid:string ,characteristic_uuid:string) {
    console.log("#######decode start arrayBuffer : ");
    console.log(arrayBuffer );
    console.log("#######decode start service_uuid : "+service_uuid+"characteristic_uuid : "+characteristic_uuid);


  var out, i, len, c;
  var char2, char3;
  var array = new Uint32Array(arrayBuffer, 6);
    console.log("Uint8Array(arrayBuffer)");
  console.log(array);
  out = "";
  len = array.length;
  i = 0;
  while(i < len) {
    c = array[i++];
    switch(c >> 4)
    {
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
      // 0xxxxxxx
      out += String.fromCharCode(c);
      break;
      case 12: case 13:
      // 110x xxxx   10xx xxxx
      char2 = array[i++];
      out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
      break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = array[i++];
        char3 = array[i++];
        out += String.fromCharCode(((c & 0x0F) << 12) |
          ((char2 & 0x3F) << 6) |
          ((char3 & 0x3F) << 0));
        break;
    }
  }
    console.log("#######decode result : "+out);

  return out;
}


  constructor(public navCtrl: NavController) {

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

}
