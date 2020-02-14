import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the CheckInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-in',
  templateUrl: 'check-in.html',
})
export class CheckInPage {

  public FormItem: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.FormItem = this.fb.group({
      'name': [null],
      'phone': [null],
      'arrivalTime': [null],
      'departureDateTime': [null],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckInPage');
  }

}
