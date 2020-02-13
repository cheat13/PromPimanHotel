import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  roomNum: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private viewCtrl: ViewController) {
    this.FormItem = this.fb.group({
      'roomNum': [null, Validators.required],
      'type': [null, Validators.required],
      'amount': [null, Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      'time': [null, Validators.required],
    });

    this.roomNum = navParams.get('roomNum');
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
