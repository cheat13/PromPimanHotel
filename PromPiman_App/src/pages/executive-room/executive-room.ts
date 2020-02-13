import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { executiveRoom } from '../../models/executiveroom';

@IonicPage()
@Component({
  selector: 'page-executive-room',
  templateUrl: 'executive-room.html',
})
export class ExecutiveRoomPage {
  public data: executiveRoom[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    let item = new executiveRoom();
    item.noRoom = 555;
    item.name = "พี่บุ๋ม";
    item.checkIn = "02/02/2020";
    this.data.unshift(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExecutiveRoomPage');
  }

  presentContactModal() {
    let profileModal = this.modalCtrl.create("AddExecutiveRoomPage");
    profileModal.present();
    profileModal.onDidDismiss(data => {
      let item = new executiveRoom();
      if (data != null) {
        item.noRoom = data.value.noRoom;
        item.name = data.value.name;
        item.checkIn = data.value.checkIn;
        this.data.unshift(item);
      }
    });
  }

  delete(room: number) {
    var dataA = this.data.findIndex(it => it.noRoom == room);
    console.log(dataA);
    this.data.splice(dataA, 1);
  }
}
