import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddExecutiveRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-executive-room',
  templateUrl: 'add-executive-room.html',
})
export class AddExecutiveRoomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExecutiveRoomPage');
  }
  add(){
    this.navCtrl.push("ExecutiveRoomPage")
  }

}
