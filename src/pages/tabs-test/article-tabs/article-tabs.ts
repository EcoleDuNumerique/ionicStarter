import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-article-tabs',
  templateUrl: 'article-tabs.html'
})
export class ArticleTabsPage {

  tabOneRoot = 'TabOnePage';
  tabTwoRoot = 'TabTwoPage';
  tabThreeRoot = 'TabThreePage';

  constructor() {}

}
