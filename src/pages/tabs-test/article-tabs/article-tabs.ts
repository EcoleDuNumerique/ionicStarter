import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-article-tabs',
  templateUrl: 'article-tabs.html'
})
export class ArticleTabsPage {

  tabOneRoot = 'home';
  tabTwoRoot = 'test';
  tabThreeRoot = 'TabThreePage';

  constructor() {}
}
