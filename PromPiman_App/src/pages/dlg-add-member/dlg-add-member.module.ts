import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgAddMemberPage } from './dlg-add-member';

@NgModule({
  declarations: [
    DlgAddMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(DlgAddMemberPage),
  ],
})
export class DlgAddMemberPageModule {}
