import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NameComponent} from "../../components/name/name";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [
    NameComponent
  ]
})
export class HomePage {

  public name: string;

  constructor(public navCtrl: NavController) {
    this.name = 'Alexandre';
  }

}
