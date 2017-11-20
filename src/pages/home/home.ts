import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, ToastController} from 'ionic-angular';
import {NameComponent} from "../../components/name/name";
import {ApiProvider} from "../../providers/api/api";
import {HttpClient} from "@angular/common/http";

@IonicPage({
  name: 'home',
  segment: 'home',
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [
    NameComponent
  ],
})
export class HomePage {

  public tabs: any[] = [
    {
      id: 1,
      name: 'toto',
      content: 'lorem.ipsum',
    },
    {
      id: 1,
      name: 'toto',
      content: 'lorem.ipsum',
    },
    {
      id: 1,
      name: 'toto',
      content: 'lorem.ipsum',
    },
    {
      id: 1,
      name: 'toto',
      content: 'lorem.ipsum',
    },
    {
      id: 1,
      name: 'toto',
      content: 'lorem.ipsum',
    }
  ];

  public name: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public toastCtrl: ToastController, public alertCtrl: AlertController, public api: ApiProvider, public http: HttpClient) {
    this.name = 'Alexandre';
  }

  /**
   * Direction la page de test avec un paramètre "nom"
   * @param name
   */
   goToPageTest(name) {
    this.navCtrl.push('test', {id: 1, name: name});
   }

  /**
   * On ouvre la modale de test avec un paramètre, et on réupère les paramètres passés à la fermeture
   * @param name
   */
  openModalTest(name) {
    //  Création de la modale
    let modal = this.modalCtrl.create('test', {name: name, modal: true});

    //  Ouverture de la modale
    modal.present();

    //  On récupère les paramètres passés à la fermeture
    modal.onDidDismiss((data) => {
      console.log(data);

      //  on crée un toast
      let toast = this.toastCtrl.create({
        message: data.message,
        duration: 3000,
        position: 'top',
      });

      //  On présente le toast
      toast.present();

      //  A la fermeture du toast
      toast.onDidDismiss(() => {
        console.log('le toast a été fermé !');
      });
    });
  }

  displayAlert() {
    let alert = this.alertCtrl.create({
      title: 'Titre de l\'alerte',
      subTitle: 'Message de l\'alerte',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Fermeture de l\'alerte');
          }
        },
        {
          text: 'OK',
          handler: () => {
            let toast = this.toastCtrl.create({
              message: 'Vous avez fermé l\'alerte !',
              position: 'bottom',
              duration: 2000,
            });
            toast.present();
          }
        }
      ]
    });

    alert.present();

    alert.onDidDismiss(() => {
      console.log('fermeture de l\'alerte');
    })
  }
}

