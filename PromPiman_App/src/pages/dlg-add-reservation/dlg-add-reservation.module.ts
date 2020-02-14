import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgAddReservationPage } from './dlg-add-reservation';

@NgModule({
  declarations: [
    DlgAddReservationPage,
  ],
  imports: [
    IonicPageModule.forChild(DlgAddReservationPage),
  ],
})
export class DlgAddReservationPageModule {}
