import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.scss'],
})
export class HeaderPrincipalComponent implements OnInit {

  @Input() titulo: string = "";

  constructor() { }

  ngOnInit() {}

}
