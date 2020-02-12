import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { CheckInPage } from '../pages/check-in/check-in';
import { CheckOutPage } from '../pages/check-out/check-out';
import { BookingPage } from '../pages/booking/booking';
import { ExtraPage } from '../pages/extra/extra';
import { OutOfOrderPage } from '../pages/out-of-order/out-of-order';
import { ExecutiveRoomPage } from '../pages/executive-room/executive-room';
import { GuestInHousePage } from '../pages/guest-in-house/guest-in-house';
import { GuestRegistrationPage } from '../pages/guest-registration/guest-registration';
import { CashierReportPage } from '../pages/cashier-report/cashier-report';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RegisterPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Register', component: "RegisterPage" },
      { title: 'CheckIn', component: "CheckInPage" },
      { title: 'CheckOut', component: "CheckOutPage" },
      { title: 'Booking', component: "BookingPage" },
      { title: 'Extra', component: "ExtraPage" },
      { title: 'OutOfOrder', component: "OutOfOrderPage" },
      { title: 'ExecutiveRoom', component: "ExecutiveRoomPage" },
      { title: 'GuestInHouse', component: "GuestInHousePage" },
      { title: 'GuestRegistration', component: "GuestRegistrationPage" },
      { title: 'CashierReport', component: "CashierReportPage" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
