import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-executive-room',
  templateUrl: 'executive-room.html',
})
export class ExecutiveRoomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExecutiveRoomPage');
  }
  add(){
    this.navCtrl.push("AddExecutiveRoomPage")
  }

}
