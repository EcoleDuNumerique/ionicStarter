import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ItunesProvider} from "../../providers/itunes/itunes";

/**
 * Generated class for the ItunesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'itunes',
  segment: 'itunes',
})
@Component({
  selector: 'page-itunes',
  templateUrl: 'itunes.html',
})
export class ItunesPage {

  public results: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public itunes: ItunesProvider) {
    this.itunes.search('Hardwell');
    console.log(this.itunes.results);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItunesPage');
  }

}
