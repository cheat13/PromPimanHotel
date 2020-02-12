import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-out-of-order',
  templateUrl: 'out-of-order.html',
})
export class OutOfOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutOfOrderPage');
  }

  add() {
    this.navCtrl.push("AddOutOfOrderPage")
  }
}

