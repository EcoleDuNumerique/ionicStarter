import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutTabsPage } from './about-tabs';

@NgModule({
  declarations: [
    AboutTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutTabsPage),
  ]
})
export class AboutTabsPageModule {}
