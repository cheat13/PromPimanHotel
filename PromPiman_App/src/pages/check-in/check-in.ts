import { Member } from './../../models/Member';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the CheckInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  public roomLst: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.clear();
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

  confirm() {
    this.clear();
  }

  clear() {
    this.name = null;
    this.phone = null;
    this.picture = "../../assets/imgs/1377139107-2-o.jpg";
    this.arrivalDateTime = null;
    this.departureDateTime = null;
    this.roomLst = null;
  }

}
