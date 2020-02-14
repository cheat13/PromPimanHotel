import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Extra, lstRoomsExtra } from '../../models/Extra';
import { get } from '@ionic-native/core';

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
  lstRoom: string[] = [];
  roomNum: string;
  lstExtra: Extra[] = [];
  totalPrice: number = 0;
  isShowBut: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtraPage');
    lstRoomsExtra.forEach(it => {
      this.lstRoom.push(it.roomNumber);
    });
  }

  addExtra() {
    const modal = this.modalCtrl.create("DlgAddExtraPage", { roomNum: this.roomNum, dataEdit: null });
    modal.onDidDismiss(data => {
      if (data) {

        let ex = new Extra();
        ex.type = data.get('type').value;
        ex.amount = data.get('amount').value;
        let date: Date = new Date(data.get('time').value);
        date.setHours(date.getHours() - 7);
        ex.time = date;

        this.lstExtra.unshift(ex);
        this.calculateTotal();
      }
    });
    modal.present();
  }

  calculateTotal() {
    this.totalPrice = this.lstExtra.reduce((sum, number) => sum + Number(number.amount), 0);
  }

  editExtra(item: Extra) {
    const modal = this.modalCtrl.create("DlgAddExtraPage", { roomNum: this.roomNum, dataEdit: item });
    modal.onDidDismiss(data => {
      if (data) {

        let ex = new Extra();
        ex.type = data.get('type').value;
        ex.amount = data.get('amount').value;
        let date: Date = new Date(data.get('time').value);
        date.setHours(date.getHours() - 7);

        ex.time = date;
        let index = this.lstExtra.indexOf(item);
        if (index !== -1) {
          this.lstExtra[index] = ex;
        }
        this.calculateTotal();
      }
    });
    modal.present();
  }

  showExtraDetail(ev: any) {
    this.isShowBut = false;
    this.lstExtra = lstRoomsExtra.find(it => it.roomNumber == ev).lstExtra;
    this.calculateTotal();
  };

  deleteExtra(index: number) {
    if (index !== -1) {
      this.lstExtra.splice(index, 1);
      this.calculateTotal();
    }
  }
}
