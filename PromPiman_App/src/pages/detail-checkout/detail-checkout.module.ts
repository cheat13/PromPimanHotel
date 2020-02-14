import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailCheckoutPage } from './detail-checkout';

@NgModule({
  declarations: [
    DetailCheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailCheckoutPage),
  ],
})
export class DetailCheckoutPageModule {}
