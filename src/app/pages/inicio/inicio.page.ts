import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { News } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public noticias: News[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.dataService.getNoticias().subscribe( resp => { this.noticias.push(...resp)});
    
    this.dataService.getNoticias().subscribe( resp => { this.noticias.push(...resp)});
    
    
  }

}
