import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CashierReport } from '../../models/CashierReport';

@IonicPage()
@Component({
  selector: 'page-cashier-report',
  templateUrl: 'cashier-report.html',
})
export class CashierReportPage {

  CashierReports: CashierReport[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.CashierReport();
  }

  CashierReport() {
    let data = new CashierReport();
    data.order = "แผงหมูปิ้ง";
    data.amount = 40;

    let data1 = new CashierReport();
    data1.order = "ที่จอดรถ";
    data1.amount = 120;

    this.CashierReports.push(data);
    this.CashierReports.push(data1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CashierReportPage');
  }

  presentModalAddExtra() {

    const modal = this.modalCtrl.create("DlgCashierReportPage");
    modal.present()
    // const modalCtrl = this.modalCtrl.create("DlgCashierReportPage");
    // modal.onDidDismiss(data => {
    //   if (data) {
    //     let member = new Member();
    //     member._id = data.get('_id').value;
    //     member.idNumber = data.get('idNumber').value;
    //     member.tHName = data.get('tHName').value;
    //     member.eNName = data.get('eNName').value;
    //     member.dateOfBirth = data.get('dateOfBirth').value;
    //     member.address = data.get('address').value;
    //     member.dateOfIssue = data.get('dateOfIssue').value;
    //     member.dateOfExpiry = data.get('dateOfExpiry').value;
    //     member.picture = data.get('picture').value;
    //     member.phoneNumber = data.get('phoneNumber').value;
    //     member.signature = data.get('signature').value;
    //     this.members.unshift(member);
    //   }
    // });
    // modalCtrl.present();

  }
}
