import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashierReportPage } from './cashier-report';

@NgModule({
  declarations: [
    CashierReportPage,
  ],
  imports: [
    IonicPageModule.forChild(CashierReportPage),
  ],
})
export class CashierReportPageModule {}
