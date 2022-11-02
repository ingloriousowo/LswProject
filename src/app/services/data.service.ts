import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente, News } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getOpcionesMenu(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json')
  }

  getNoticias(){
    return this.http.get<News[]>('https://lsw-news-default-rtdb.firebaseio.com/Noticias.json');
  }
}
