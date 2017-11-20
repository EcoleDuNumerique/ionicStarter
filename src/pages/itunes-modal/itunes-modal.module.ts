import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItunesModalPage } from './itunes-modal';

@NgModule({
  declarations: [
    ItunesModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ItunesModalPage),
  ],
})
export class ItunesModalPageModule {}
