import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Member } from '../../models/member';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  items: Member[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getMembers();
  }

  getMembers() {
    let m1 = new Member();
    let m2 = new Member();
    m1._id = "0001";
    m2._id = "0002";
    m1.tHName = "นายกฤษณะ ตระกูลพรหม";
    m2.tHName = "นายวรพุทธิ์ แสงชาติ";
    m1.eNName = "Kritsana Tragoolphrom";
    m2.eNName = "Woraput SangChart";
    m1.phoneNumber = "0837325693";
    m2.phoneNumber = "0854579229";
    this.items = [m1, m2];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  searching(ev: any) {
    // Reset items back to all of the items
    this.getMembers();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return this.haveWord(item.tHName, val) ||
          this.haveWord(item.eNName, val) ||
          this.haveWord(item.phoneNumber, val);
      })
    }
  }

  haveWord(item: any, word: any): boolean {
    return item.toLowerCase().indexOf(word.toLowerCase()) > -1
  }
}
