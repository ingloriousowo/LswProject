import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<Componente[]>;
  
  constructor(private dataService: DataService, private iab: InAppBrowser, private alert: AlertController) {}

  ngOnInit(){
    this.componentes = this.dataService.getOpcionesMenu();
  }

  async clickGithub(){
    const alerta = await this.alert.create({
      header: 'Estar por Salir de la App',
      buttons: [
        {
          text:'Cancelar',
          role: 'cancel'
        },
        {
          text:'Confirmar',
          handler: () =>{
            this.abrirGithub();
          }
        }
      ]
    });

    await alerta.present();
  }

  abrirGithub(){
    const browser = this.iab.create('https://github.com/ingloriousowo/LswProject.git');
    browser.show();
  }
}
