import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabOnePage } from './tab-one';

@NgModule({
  declarations: [
    TabOnePage,
  ],
  imports: [
    IonicPageModule.forChild(TabOnePage),
  ],
})
export class TabOnePageModule {}
