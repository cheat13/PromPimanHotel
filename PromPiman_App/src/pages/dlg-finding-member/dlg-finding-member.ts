import { Member } from './../../models/Member';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Member, MemberLst } from '../../models/Member';

@IonicPage()
@Component({
  selector: 'page-dlg-finding-member',
  templateUrl: 'dlg-finding-member.html',
})
export class DlgFindingMemberPage {

  public members: Member[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.getMembers();
  }

  getMembers() {
    this.members = MemberLst.sort((a, b) => (Number)(b._id) - (Number)(a._id));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgFindingMemberPage');
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

  public okDialog(member: Member) {
    this.viewCtrl.dismiss(member);
  }

}
