import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GuestRegist } from '../../models/GuestRegist';

@IonicPage()
@Component({
  selector: 'page-guest-in-house',
  templateUrl: 'guest-in-house.html',
})
export class GuestInHousePage {
  GuestRegists: GuestRegist[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.GuestRegist();
  }

  GuestRegist() {
    let m1 = new GuestRegist();
    m1.arriveDate = "6/7/2018";
    m1.arriveTime = "20:00";
    m1.roomNo = 309;
    m1.name = "วีระชัย ย่อชัย";
    m1.nationality = "ไทย";
    m1._id = "3 3314 00287 65 2";
    m1.currentaddress = "109 ม.9 ต.โคกม้า อ.ประโคนชัย จ.บุรีรัมย์";
    m1.job = "รับจ้าง";
    m1.comefrom = "บุรีรัมย์";
    m1.goto = "อ.เมือง";
    m1.gotoProvince = "จ.ศรีสะเกษ";
    m1.departureDate = "8/7/18";
    m1.departureTime = "12:00";
    m1.remark = "";

    let m2 = new GuestRegist();
    m2.arriveDate = "6/7/2018";
    m2.arriveTime = "20:00";
    m2.roomNo = 309;
    m2.name = "วีระชัย สายย่อ";
    m2.nationality = "ไทย";
    m2._id = "3 3314 00287 65 2";
    m2.currentaddress = "109 ม.9 ต.โคกม้า อ.ประโคนชัย จ.บุรีรัมย์";
    m2.job = "รับจ้าง";
    m2.comefrom = "บุรีรัมย์";
    m2.goto = "อ.เมือง";
    m2.gotoProvince = "จ.ศรีสะเกษ";
    m2.departureDate = "8/7/18";
    m2.departureTime = "12:00";
    m2.remark = "";

    this.GuestRegists.push(m1);
    this.GuestRegists.push(m2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestInHousePage');
  }

}
