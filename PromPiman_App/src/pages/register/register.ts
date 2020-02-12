import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Member } from '../../models/Member';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  members: Member[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.getMembers();
  }

  getMembers() {
    let m1 = new Member();
    m1._id = "0001";
    m1.idNumber = "0123456789123";
    m1.tHName = "นายกฤษณะ ตระกูลพรหม";
    m1.eNName = "Kritsana Tragoolphrom";
    m1.phoneNumber = "0837325693";

    let m2 = new Member();
    m2._id = "0002";
    m2.idNumber = "0123456789123";
    m2.tHName = "นายวรพุทธิ์ แสงชาติ";
    m2.eNName = "Woraput SangChart";
    m2.phoneNumber = "0854579229";
    
    this.members = [m2, m1];
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
    const modal = this.modalCtrl.create("DlgAddMemberPage", { _id: "0003" });
    modal.onDidDismiss(data => {
      if (data) {
        let member = new Member();
        member._id = data.get('_id').value;
        member.idNumber = data.get('idNumber').value;
        member.tHName = data.get('tHName').value;
        member.eNName = data.get('eNName').value;
        member.dateOfBirth = data.get('dateOfBirth').value;
        member.address = data.get('address').value;
        member.dateOfIssue = data.get('dateOfIssue').value;
        member.dateOfExpiry = data.get('dateOfExpiry').value;
        member.picture = data.get('picture').value;
        member.phoneNumber = data.get('phoneNumber').value;
        member.signature = data.get('signature').value;
        this.members.unshift(member);
      }
    });
    modal.present();
  }

  presentModalEditMember(member: Member) {
    const modal = this.modalCtrl.create("DlgEditMemberPage", { member: member });
    modal.onDidDismiss(data => {
      if (data) {
        let member = new Member();
        member._id = data.get('_id').value;
        member.idNumber = data.get('idNumber').value;
        member.tHName = data.get('tHName').value;
        member.eNName = data.get('eNName').value;
        member.dateOfBirth = data.get('dateOfBirth').value;
        member.address = data.get('address').value;
        member.dateOfIssue = data.get('dateOfIssue').value;
        member.dateOfExpiry = data.get('dateOfExpiry').value;
        member.picture = data.get('picture').value;
        member.phoneNumber = data.get('phoneNumber').value;
        member.signature = data.get('signature').value;

        var index = this.members.findIndex(it => it._id == member._id);
        this.members[index] = member;
      }
    });
    modal.present();
  }
}
