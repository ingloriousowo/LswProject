import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { News } from '../../interfaces/interfaces';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  get noticias(): News[]{
    return this.storageService.GetnoticiasLocales;
  }

  constructor( private storageService: StorageService) { }

  

  ngOnInit() {
  }

  hayFavoritos(): boolean{
    if(this.noticias.length == 0){
      return true;
    }else{
      return false;
    }
  }

}
