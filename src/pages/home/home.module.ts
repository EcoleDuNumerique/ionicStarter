import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import {HomePage} from "./home";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicModule,
    ComponentsModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
