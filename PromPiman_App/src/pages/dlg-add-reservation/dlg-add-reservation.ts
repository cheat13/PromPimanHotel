import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime, ViewController } from 'ionic-angular';
import { RoomsSelect, RoomsNotAvailable } from '../../models/Room';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reservation, ReservationLst } from '../../models/Reservation';

@IonicPage()
@Component({
  selector: 'page-dlg-add-reservation',
  templateUrl: 'dlg-add-reservation.html',
})
export class DlgAddReservationPage {

  public FormItem: FormGroup;
  public roomsSelect: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private viewCtrl: ViewController) {
    this.FormItem = this.fb.group({
      'name': [null,],
      'phoneNumber': [null,],
      'arrivalDateTime': [null,],
      'departureDateTime': [null,],
      'creationDateTime': [null],
      'lastUpdate': [null],
    });
    this.roomsSelect = RoomsSelect;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgAddReservationPage');
  }

  okDialog() {
    this.FormItem.get('creationDateTime').setValue(new Date());

    let reserver = this.FormItem.value as Reservation;
    reserver.arrivalDateTime = new Date(reserver.arrivalDateTime);
    reserver.departureDateTime = new Date(reserver.departureDateTime);

    reserver.roomLst = [];
    this.roomsSelect.forEach(room => {
      reserver.roomLst.push(room);
      RoomsNotAvailable.push(room);
    });
    ReservationLst.push(reserver);

    this.clear();
    this.viewCtrl.dismiss(this.FormItem);
  }

  closeDialog() {
    this.clear();
    this.viewCtrl.dismiss();
  }

  selectRooms() {
    this.navCtrl.push("RoomsPage");
  }

  clear() {
    RoomsSelect.splice(0);
  }
}
