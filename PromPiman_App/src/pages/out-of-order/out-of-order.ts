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
    let contactModal = this.modalCtrl.create("AddOutOfOrderPage", {_id: "00002"});
     contactModal.onDidDismiss(data => {
       console.log(data.value);
       let item = new outOfOrder();
       item.roomNumber = data.value.roomNumber;
       item.problem = data.value.problem;
       this.data.unshift(item);
     });
    contactModal.present();
  }

  
}

