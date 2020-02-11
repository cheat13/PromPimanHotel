import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestInHousePage } from './guest-in-house';

@NgModule({
  declarations: [
    GuestInHousePage,
  ],
  imports: [
    IonicPageModule.forChild(GuestInHousePage),
  ],
})
export class GuestInHousePageModule {}
