import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TestProvider } from '../providers/test/test';
import {HomePageModule} from "../pages/home/home.module";
import {TestPageModule} from "../pages/test/test.module";
import { ApiProvider } from '../providers/api/api';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ItunesProvider } from '../providers/itunes/itunes';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    TestPageModule,

    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestProvider,
    ApiProvider,
    ItunesProvider,
  ]
})
export class AppModule {}
