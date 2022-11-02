import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { News } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private noticiasLocales: News[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  get GetnoticiasLocales(){
    return [...this.noticiasLocales];
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.cargarFavoritos();
  }

  async guardarNoticia( noticia: News){

    const validarExistencia = this.noticiasLocales.find(noticiaLocal => noticiaLocal.Titulo === noticia.Titulo);

    if(validarExistencia){
      this.noticiasLocales = this.noticiasLocales.filter( noticiaLocal => noticiaLocal.Titulo !== noticia.Titulo);
    }else{
      this.noticiasLocales = [noticia, ...this.noticiasLocales];
    }
    
    this._storage.set('noticias', this.noticiasLocales);
  }

  async cargarFavoritos(){
    try {
      const noticias = await this._storage.get('noticias');
      this.noticiasLocales = noticias || [];
    } catch (error) {
      
    }
  }

  existeEnFavoritos( noticia: News){
    return !!this.noticiasLocales.find(noticiaLocal => noticiaLocal.Titulo === noticia.Titulo);
  }
}
