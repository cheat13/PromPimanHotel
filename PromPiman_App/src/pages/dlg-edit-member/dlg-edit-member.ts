import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-dlg-edit-member',
  templateUrl: 'dlg-edit-member.html',
})
export class DlgEditMemberPage {

  public FormItem: FormGroup;
  private submitRequested: boolean

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private viewCtrl: ViewController) {
    this.FormItem = this.fb.group({
      '_id': [null],
      'idNumber': [null, [Validators.compose([Validators.pattern('[0-9]*')]), Validators.minLength(13), Validators.maxLength(13), Validators.required]],
      'tHName': [null, Validators.required],
      'eNName': [null, Validators.required],
      'dateOfBirth': [null],
      'address': [null],
      'dateOfIssue': [null],
      'dateOfExpiry': [null],
      'picture': ['../../assets/imgs/man.png'],
      'phoneNumber': [null, [Validators.compose([Validators.pattern('[0-9]*')]), Validators.minLength(10), Validators.maxLength(10), Validators.required]],
      'signature': [null],
      'creationDateTime': [null],
      'lastUpdate': [null],
    });

    let member = navParams.get('member');
    this.FormItem.patchValue(member);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgEditMemberPage');
  }

  public okDialog() {
    this.viewCtrl.dismiss(this.FormItem);
  }

  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    if (name == "idNumber") {
      let ctrls = this.FormItem.get('idNumber');
      return (ctrls.errors && (ctrls.errors.maxlength || ctrls.errors.minlength || ctrls.errors.pattern)) && (ctrls.dirty || this.submitRequested);
    }
    if (name == "phoneNumber") {
      let ctrls = this.FormItem.get('phoneNumber');
      return (ctrls.errors && (ctrls.errors.maxlength || ctrls.errors.minlength || ctrls.errors.pattern)) && (ctrls.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}
