import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dlg-cashier-report',
  templateUrl: 'dlg-cashier-report.html',
})
export class DlgCashierReportPage {

  public FormItem: FormGroup;

  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams, private viewCtrl: ViewController) {
    this.FormItem = this.fb.group({
      "order": [null, Validators.required],
      "amount": [null, Validators.required],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgCashierReportPage');
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
    console.log(this.FormItem.value);
  }
}
