import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the AddExecutiveRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-executive-room',
  templateUrl: 'add-executive-room.html',
})
export class AddExecutiveRoomPage {
  public FormItem: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private viewCtrl: ViewController) {
    this.FormItem = this.fb.group({
      'noRoom': [null],
      'name': [null],
      'checkIn': [null],
    });

    // let _id = navParams.get('_id');
    // this.FormItem.get('_id').setValue(_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExecutiveRoomPage');
  }
  // add(){
  //   this.navCtrl.push("ExecutiveRoomPage")
  // }
  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
    console.log(this.FormItem)
  }

}
