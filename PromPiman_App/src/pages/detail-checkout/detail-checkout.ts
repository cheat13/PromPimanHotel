import { Checkout } from './../../models/Checkout';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

/**
 * Generated class for the DetailCheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-checkout',
  templateUrl: 'detail-checkout.html',
})
export class DetailCheckoutPage {
  public FormItem: FormGroup;
  detailCheckout: Checkout = null;
  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams) {
    this.detailCheckout = this.navParams.get('data');
    console.log(this.detailCheckout);
  }

  ionViewDidLoad() {
  }


}
