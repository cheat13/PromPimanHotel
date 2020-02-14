import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Member, MemberLst } from '../../models/Member';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public members: Member[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.getMembers();
  }

  getMembers() {
    this.members = MemberLst.sort((a, b) => (Number)(b._id) - (Number)(a._id));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  searching(ev: any) {
    this.getMembers();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.members = this.members.filter((item) => {
        return this.haveAnyWord(item.tHName, val) ||
          this.haveAnyWord(item.eNName, val) ||
          this.haveAnyWord(item.phoneNumber, val);
      })
    }
  }

  haveAnyWord(item: any, word: any): boolean {
    return item.toLowerCase().indexOf(word.toLowerCase()) > -1;
  }

  presentModalAddMember() {
    var count = this.members.length + 1;
    const modal = this.modalCtrl.create("DlgAddMemberPage", { _id: "000" + count });
    modal.onDidDismiss(data => {
      if (data) {
        let member = data.value;
        this.members.unshift(member);
      }
    });
    modal.present();
  }

  presentModalEditMember(member: Member) {
    const modal = this.modalCtrl.create("DlgEditMemberPage", { member: member });
    modal.onDidDismiss(data => {
      if (data) {
        let member = data.value;
        var index = this.members.findIndex(it => it._id == member._id);
        this.members[index] = member;
      }
    });
    modal.present();
  }
}
