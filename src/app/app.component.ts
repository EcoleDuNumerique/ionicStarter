import {Component, ViewChild} from '@angular/core';
import {Events, MenuController, ModalController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ArticleTabsPage} from "../pages/tabs-test/article-tabs/article-tabs";
import {Storage} from "@ionic/storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = 'ArticleTabsPage';

  public pages: Array <{title: string, pageName: string, isModal ?: boolean, params ?: Array <{id: number}>}>;

  public items: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu: MenuController, public storage: Storage, public modalCtrl: ModalController, public events: Events) {
    this.init();

    this.pages = [
      {title: 'Accueil', pageName: 'ArticleTabsPage', isModal: false},
      {title: 'Page de Test', pageName: 'test', isModal: false},
      {title: 'A propos', pageName: 'AboutTabsPage', isModal: false},
      {title: 'Article Tabs', pageName: 'ArticleTabsPage', isModal: false},
      {title: 'Itunes Search', pageName: 'itunes', isModal: false},
    ];

    this.items = [];
  }

  init() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.loadMenuItems();
      this.events.subscribe('item:added', (item) => {
          if( item ){
          this.items = this.items.concat(item);
          this.storage.set('items', this.items);
        }
      });

      this.events.subscribe('item:removed', (item) => {

      });
    });
  }

  openMusic(item) {
    let modal = this.modalCtrl.create('ItunesModalPage', {id: item.id});
    modal.present();
  }

  loadMenuItems() {
    //this.storage.remove('items');
    this.storage.get('items').then((items) => {
      if( items ) {
        console.log(items);
        this.items = this.items.concat(items);
        }
    });
  }

  openPage(page) {
    console.log(this.nav.getActive());
    if( page.pageName != this.nav.getActive().id ) {
      if( !page.isModal ) {
        this.nav.setRoot(page.pageName);
      } else {
        let modal = this.modalCtrl.create(page.pageName, page.params);
        modal.present();
      }

      //this.nav.push(page.pageName);
    }
    this.menu.close();
  }
}

