import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgFindingMemberPage } from './dlg-finding-member';

@NgModule({
  declarations: [
    DlgFindingMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(DlgFindingMemberPage),
  ],
})
export class DlgFindingMemberPageModule {}
