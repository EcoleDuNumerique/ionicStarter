import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleTabsPage } from './article-tabs';

@NgModule({
  declarations: [
    ArticleTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleTabsPage),
  ]
})
export class ArticleTabsPageModule {}
