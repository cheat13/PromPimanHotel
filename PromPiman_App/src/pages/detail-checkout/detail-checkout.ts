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
  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams) {
    this.FormItem = this.fb.group({
      'roomNum': [null, Validators.required],
      'type': [null, Validators.required],
      'amount': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      'time': [null, Validators.required],
    });
    this.FormItem.get('roomNum').setValue(navParams.get('roomNum'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailCheckoutPage');
  }

}
