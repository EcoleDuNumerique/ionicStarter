import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItunesPage } from './itunes';

@NgModule({
  declarations: [
    ItunesPage,
  ],
  imports: [
    IonicPageModule.forChild(ItunesPage),
  ],
})
export class ItunesPageModule {}
