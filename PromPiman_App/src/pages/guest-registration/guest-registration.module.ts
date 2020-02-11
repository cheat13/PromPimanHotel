import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestRegistrationPage } from './guest-registration';

@NgModule({
  declarations: [
    GuestRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestRegistrationPage),
  ],
})
export class GuestRegistrationPageModule {}
