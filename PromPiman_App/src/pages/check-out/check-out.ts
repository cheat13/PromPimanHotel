import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Checkout, lstCheckout } from '../../models/Checkout';
import { a } from '@angular/core/src/render3';

/**
 * Generated class for the CheckOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html',
})
export class CheckOutPage {
  checkouts: Checkout[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOutPage');
    this.checkouts = lstCheckout;
    this.checkouts.sort((a, b) => Number(a.departureDateTime) - Number(b.departureDateTime))
    console.log(this.checkouts);
    
  }

  detailBill(item: Checkout) {
    this.navCtrl.push("DetailCheckoutPage", { data: item })
  }

  searching(ev: any) {

  }
}
