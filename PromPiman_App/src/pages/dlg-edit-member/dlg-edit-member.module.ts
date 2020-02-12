import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgEditMemberPage } from './dlg-edit-member';

@NgModule({
  declarations: [
    DlgEditMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(DlgEditMemberPage),
  ],
})
export class DlgEditMemberPageModule {}
