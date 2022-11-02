import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { News } from '../../interfaces/interfaces';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-card-noticia',
  templateUrl: './card-noticia.component.html',
  styleUrls: ['./card-noticia.component.scss'],
})
export class CardNoticiaComponent implements OnInit {

  

  @Input() noticia: News;

  favoritoIcono: boolean = false;

  constructor(private iab: InAppBrowser, private storageService: StorageService, private toastController: ToastController, private alertController: AlertController) { }

  ngOnInit() {
    
  }

  abrirNoticia(){
    const browser = this.iab.create(this.noticia.fuenteURL);
    browser.show();
  }

  favorito(){
    this.storageService.guardarNoticia(this.noticia);
    this.presentToast();
  }

  icono(): boolean{
    const noticiaEnFavorito = this.storageService.existeEnFavoritos(this.noticia);

    if(noticiaEnFavorito){
      return  this.favoritoIcono = true;
    }else{
      return this.favoritoIcono = false;
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.icono() ? 'Noticia Guardada en Favoritos!': 'Noticia Eliminada de tus Favoritos',
      duration: 3000,
      position: 'bottom',
      icon: this.icono() ? 'star':'trash',
      mode: 'ios'
    });

    await toast.present();
  }

}
