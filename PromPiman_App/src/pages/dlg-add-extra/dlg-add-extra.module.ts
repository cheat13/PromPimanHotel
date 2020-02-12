import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgAddExtraPage } from './dlg-add-extra';

@NgModule({
  declarations: [
    DlgAddExtraPage,
  ],
  imports: [
    IonicPageModule.forChild(DlgAddExtraPage),
  ],
})
export class DlgAddExtraPageModule {}
