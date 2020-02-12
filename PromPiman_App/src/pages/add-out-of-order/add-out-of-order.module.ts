import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddOutOfOrderPage } from './add-out-of-order';

@NgModule({
  declarations: [
    AddOutOfOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(AddOutOfOrderPage),
  ],
})
export class AddOutOfOrderPageModule {}
