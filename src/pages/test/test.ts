import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ViewController} from 'ionic-angular';

@IonicPage({
  name: 'test',
  segment: 'test',
})
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  public name: string;
  public isModal: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public viewCtrl: ViewController) {

    //  On réupère le nom passé en paramètre à l'ouverture de la page
    this.name = this.navParams.get('name');

    //  Selon si le paramètre modal est défini, on en conclut que la page doit s'ouvrir en modale.
    if( this.navParams.get('modal') ) {
      this.isModal = true;
    }
  }

  /**
   * On ferme la modale en lui passant des paramètres
   */
  closeModal() {
    let data = {message: 'Vous venez de fermer la modale !'};
    this.viewCtrl.dismiss(data);
  }

  ionViewCanEnter() {

    console.log('avant de rentrer dans la page, retourne un boolean');


    //  Création du loader
    let loader = this.loadingCtrl.create({content: 'Chargement...'});

    //  Affichage du loader
    loader.present();

    setTimeout(() => {
      //  Fermeture du loader
      loader.dismiss();
    }, 2000);
  }

  goToHomePage() {
    if( this.isModal ) {
      this.viewCtrl.dismiss();
    } else {
      this.navCtrl.setRoot('home');

      //this.navCtrl.push('home');
    }
  }

  ionViewWillEnter() {
    console.log('avant de rentrer mais après ionViewCanEnter');
  }

  ionViewDidEnter() {
    console.log('On est rentré dans la page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
