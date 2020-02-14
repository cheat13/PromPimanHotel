import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Reservation, ReservationLst } from '../../models/Reservation';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  reservations: Reservation[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.getMembers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }

  getMembers() {
    this.reservations = ReservationLst.sort((a, b) => Number(a.arrivalDateTime) - Number(b.arrivalDateTime));
  }

  searching(ev: any) {
    this.getMembers();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.reservations = this.reservations.filter((item) => {
        return this.haveAnyWord(item.name, val) ||
          this.haveAnyWord(item.phoneNumber, val);
      })
    }
  }

  haveAnyWord(item: any, word: any): boolean {
    return item.toLowerCase().indexOf(word.toLowerCase()) > -1;
  }

  presentModalAddReservation() {
    const modal = this.modalCtrl.create("DlgAddReservationPage");
    modal.present();
  }

  // presentModalEditReservation(reserver: Reservation, index: number) {
  //   const modal = this.modalCtrl.create("DlgEditReservationPage", { reserver: reserver });
  //   modal.onDidDismiss(data => {
  //     if (data) {
  //       let member = data.value;
  //       this.reservations[index] = member;
  //     }
  //   });
  //   modal.present();
  // }

  clear(index: number) {
    this.reservations.splice(index, 1);
  }
}
