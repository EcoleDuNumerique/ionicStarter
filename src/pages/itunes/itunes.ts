import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ItunesProvider} from "../../providers/itunes/itunes";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  public items: any;

  //public searchData: FormGroup;

  public counter: number = 0;
  public searchData: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public itunes: ItunesProvider) {
    //console.log(this.itunes.results);

    /*
    this.searchData = this.formBuilder.group({
      search: ['', Validators.compose([Validators.required])]
    });
    */

  }

  getItems($event) {
    if( this.searchData.length >= 3 ) {
      this.itunes.search(this.searchData, this.counter).then(() => {
        this.items = this.itunes.results;
        this.counter += this.itunes.counter;
      });
    }
  }

  loadMore(infiniteScroll) {
    let counter = 0;
    setTimeout(() => {
      this.itunes.search(this.searchData, this.counter).then(() => {
        this.items =  this.items.concat(this.itunes.results);
        this.counter += this.itunes.counter;
        counter = this.itunes.counter;
      });

      if( counter < 1 ) {
        infiniteScroll.complete();
      }
    }, 1000);

  }

  /*
  ionViewCanEnter() {
    return this.itunes.search('Hardwell').then(() => {
      this.results = this.itunes.results;
    });
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItunesPage');
  }

}
