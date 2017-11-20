import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ItunesProvider} from "../../providers/itunes/itunes";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the ItunesModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itunes-modal',
  templateUrl: 'itunes-modal.html',
})
export class ItunesModalPage {

  public item: any;
  public isClicked: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public itunesProvider: ItunesProvider, public events: Events, public storage: Storage) {
   this.isClicked = false;
  }

  ionViewCanEnter(): Promise <any> {
    return new Promise((resolve, reject) => {
      this.itunesProvider.get(this.navParams.get('id')).subscribe((response) => {
        console.log(response);
        this.item = response['results'][0];
        resolve();
        //console.log(this.item);
      }, error => {
        reject(error);
      });
    });

  }

  addToFavorite() {
    console.log('click');

    if( this.isClicked ) {

    } else {
      let newItem = {
        id: this.item.collectionId,
        title: this.item.collectionName,
      };

      console.log(newItem);

      this.events.publish('item:added', newItem);
      this.isClicked = true;
      console.log('event published');

      /*
      this.storage.get('items').then(items => {
        console.log(items);
        if( items ) {
          console.log('has items');
          let musicItems = items;
          console.log(musicItems);
          musicItems = musicItems.push(newItem);
          console.log(musicItems);
          this.storage.set('items', musicItems);
        } else {
          console.log('has no items');

          this.storage.set('items', newItem);
        }
      });
      */
    }
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
