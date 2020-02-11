import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutOfOrderPage } from './out-of-order';

@NgModule({
  declarations: [
    OutOfOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(OutOfOrderPage),
  ],
})
export class OutOfOrderPageModule {}
