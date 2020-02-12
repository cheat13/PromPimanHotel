import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reservation } from '../../models/Reservation';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getMembers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }

  getMembers() {
    let r1 = new Reservation();
    r1.name = "นายกฤษณะ ตระกูลพรหม";
    r1.phoneNumber = "0837325693";
    r1.roomLst = ["501", "502", "503", "504"];
    r1.arrivalDateTime = new Date(2020, 1, 20);
    r1.departureDateTime = new Date(2020, 1, 21);
    r1.creationDateTime = new Date(2020, 1, 11);
    
    let r2 = new Reservation();
    r2.name = "นายวรพุทธิ์ แสงชาติ";
    r2.phoneNumber = "0854579229";
    r2.roomLst = ["601"];
    r2.arrivalDateTime = new Date(2020, 1, 19);
    r2.departureDateTime = new Date(2020, 1, 22);
    r2.creationDateTime = new Date(2020, 1, 12);

    this.reservations = [r2, r1];
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
}
