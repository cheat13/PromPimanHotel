import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Extra } from '../../models/Member';

/**
 * Generated class for the ExtraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html',
})
export class ExtraPage {
  roomNum: string;
  lstExtra: Extra[];
  totalPrice: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtraPage');
    this.lstExtra = [];
    let ex1 = new Extra;
    ex1.roomNumber = "519";
    this.roomNum = ex1.roomNumber;
    ex1.type = "minibar";
    ex1.amount = 40;
    ex1.time = Date.now();

    let ex2 = new Extra;
    ex2.time = Date.now();
    ex2.roomNumber = "519";
    ex2.type = "ซักรีด";
    ex2.amount = 100;
    console.log(this.lstExtra);
    this.lstExtra.push(ex1, ex2);

    console.log(this.lstExtra);
    this.totalPrice = 0;
    for (const i of this.lstExtra) {
      this.totalPrice += i.amount;
    }

  }

  addExtra() {
    const modal = this.modalCtrl.create("DlgAddExtraPage", { roomNum: this.roomNum });
    modal.onDidDismiss(data => {
      if (data) {
        let ex = new Extra();
        ex.type = data.get('type').value;
        ex.amount = data.get('amount').value;
        ex.time = data.get('time').value;
        this.lstExtra.unshift(ex);
        this.totalPrice += Number(ex.amount);
      }
    });
    modal.present();
  }

  search(ev: any) {

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.items = this.items.filter((item) => {
    //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }
    return null;
  }
}
