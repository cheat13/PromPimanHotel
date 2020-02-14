import { Extra } from './../../models/Extra';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, DateTime } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the DlgAddExtraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-add-extra',
  templateUrl: 'dlg-add-extra.html',
})
export class DlgAddExtraPage {
  public FormItem: FormGroup;
  private submitRequested: boolean
  dataEdit: Extra;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private viewCtrl: ViewController) {
    this.FormItem = this.fb.group({
      'roomNum': [null, Validators.required],
      'type': [null, Validators.required],
      'amount': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      'time': [null, Validators.required],
    });
    this.FormItem.get('roomNum').setValue(navParams.get('roomNum'));
    if (navParams.get('dataEdit') !== null) {
      this.dataEdit = navParams.get('dataEdit');
      this.FormItem.patchValue(this.dataEdit);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgAddExtraPage');
  }
  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
