import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-out-of-order',
  templateUrl: 'add-out-of-order.html',
})
export class AddOutOfOrderPage {
  public FormItem: FormGroup;


  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams, private viewCtrl: ViewController) {
    this.FormItem = this.fb.group({
      'roomNumber': [null],
      'problem': [null],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddOutOfOrderPage');
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
    console.log(this.FormItem)
  }

  public closeDialog2() {
    this.viewCtrl.dismiss();
  }
}
