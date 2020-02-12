import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddOutOfOrderPage } from '../pages/add-out-of-order/add-out-of-order';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
