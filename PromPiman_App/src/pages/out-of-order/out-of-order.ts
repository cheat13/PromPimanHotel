import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { outOfOrder } from '../../models/outOfOrder';

@IonicPage()
@Component({
  selector: 'page-out-of-order',
  templateUrl: 'out-of-order.html',
})
export class OutOfOrderPage {
  public data: outOfOrder[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    let item = new outOfOrder();
    item.roomNumber = 888;
    item.problem = "ไฟไม่ติด + เครื่องทำน้ำอุ่นเสีย";
    this.data.unshift(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutOfOrderPage');
  }

  presentContactModal() {
    let contactModal = this.modalCtrl.create("AddOutOfOrderPage");
    contactModal.present();
    contactModal.onDidDismiss(data => {
      let item = new outOfOrder();
      if (data != null) {
        item.roomNumber = data.value.roomNumber;
        item.problem = data.value.problem;
        this.data.unshift(item);
      }
    });
  }

  delete(room: number) {
    var dataA = this.data.findIndex(it => it.roomNumber == room);
    console.log(dataA);
    this.data.splice(dataA, 1);
  }
}

