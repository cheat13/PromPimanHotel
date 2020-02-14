import { Checkout, lstCheckout } from './../../models/Checkout';
import { Member } from './../../models/Member';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RoomsSelect, RoomsNotAvailable } from '../../models/Room';

@IonicPage()
@Component({
  selector: 'page-check-in',
  templateUrl: 'check-in.html',
})
export class CheckInPage {

  public name: string;
  public phone: string;
  public picture: string;
  public arrivalDateTime: Date;
  public departureDateTime: Date;
  public roomsSelect: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.clear();
    this.roomsSelect = RoomsSelect;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckInPage');
  }

  presentModalAddMember() {
    const modal = this.modalCtrl.create("DlgFindingMemberPage");
    modal.onDidDismiss(data => {
      if (data) {
        let member = data as Member;
        this.name = member.tHName;
        this.phone = member.phoneNumber;
        this.picture = member.picture;
      }
    });
    modal.present();
  }

  selectRooms() {
    this.navCtrl.push("RoomsPage");
  }

  confirm() {
    this.roomsSelect.forEach(room => {
      let checkIn = new Checkout();
      checkIn.roomNumber = room;
      checkIn.name = this.name;
      checkIn.phone = this.phone;
      checkIn.arrivalTime = this.arrivalDateTime;
      checkIn.departureDateTime = this.departureDateTime;
      lstCheckout.push(checkIn);
      RoomsNotAvailable.push(room);
    });
    this.clear();
  }

  clear() {
    this.name = null;
    this.phone = null;
    this.picture = "../../assets/imgs/1377139107-2-o.jpg";
    this.arrivalDateTime = null;
    this.departureDateTime = null;
    this.roomsSelect = null;
    RoomsSelect.splice(0);
  }
}
