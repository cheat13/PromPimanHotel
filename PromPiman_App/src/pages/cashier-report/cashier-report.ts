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
    modal.onDidDismiss(data => {
      if (data) {
        let item = new CashierReport();
        item.amount = data.value.amount;
        item.order = data.value.order;
        this.CashierReports.unshift(item);
      }
    });
    modal.present();
  }
}
