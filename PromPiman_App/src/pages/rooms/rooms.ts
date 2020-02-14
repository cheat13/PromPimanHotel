import { RoomsNotAvailable } from './../../models/Room';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AllRooms, RoomsSelect } from '../../models/Room';

@IonicPage()
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html',
})
export class RoomsPage {

  public rooms: string[];
  public roomsSelect: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.rooms = AllRooms;
    this.roomsSelect = RoomsSelect;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomsPage');
  }

  selectRoom(room: string) {
    if (this.roomsSelect.every(r => r != room)) {
      this.roomsSelect.push(room);
      this.roomsSelect.sort((a, b) => (Number)(a) - (Number)(b));
    } else {
      this.deleteRoom(room);
    }
  }

  deleteRoom(room: string) {
    let index = this.roomsSelect.indexOf(room);
    this.roomsSelect.splice(index, 1);
  }

  selected(room: string): boolean {
    return RoomsSelect.some(r => r == room);
  }

  notAvailable(room: string): boolean {
    return RoomsNotAvailable.some(r => r == room);
  }

  confirm() {
    this.navCtrl.pop();
  }
}
