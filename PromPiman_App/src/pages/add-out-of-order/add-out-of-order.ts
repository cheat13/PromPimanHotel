import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-out-of-order',
  templateUrl: 'add-out-of-order.html',
})
export class AddOutOfOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddOutOfOrderPage');
  }
  add() {
    this.navCtrl.push("OutOfOrderPage")
  }

}
