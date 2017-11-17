import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ArticleTabsPage} from "../pages/tabs-test/article-tabs/article-tabs";
import {HomeTabsPage} from "../pages/home-tabs/home-tabs";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = ArticleTabsPage;

  public pages: Array <{title: string, pageName: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu: MenuController) {
    this.init();

    this.pages = [
      {title: 'Accueil', pageName: 'ArticleTabsPage'},
      {title: 'Page de Test', pageName: 'test'},
      {title: 'A propos', pageName: 'AboutTabsPage'},
      {title: 'Article Tabs', pageName: 'ArticleTabsPage'}
    ];
  }

  init() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    console.log(this.nav.getActive());
    if( page.pageName != this.nav.getActive().id ) {
      this.nav.setRoot(page.pageName);
      //this.nav.push(page.pageName);
    }
    this.menu.close();
  }
}

