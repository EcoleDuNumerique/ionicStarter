import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about-tabs',
  templateUrl: 'about-tabs.html'
})
export class AboutTabsPage {

  aboutMeRoot = 'AboutMePage';
  aboutIdemRoot = 'AboutIdemPage';
  contactRoot = 'ContactPage';

  constructor(public navCtrl: NavController) {}

}
