import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPrincipalComponent } from './header-principal/header-principal.component';
import { IonicModule } from '@ionic/angular';
import { CardNoticiaComponent } from './card-noticia/card-noticia.component';



@NgModule({
  declarations: [
    HeaderPrincipalComponent,
    CardNoticiaComponent
  ],
  exports: [
    HeaderPrincipalComponent,
    CardNoticiaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
