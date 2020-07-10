import { Component } from '@angular/core';
import { MENU_ITEMS0 } from './pages-menu';
import { MENU_ITEMS1 } from './pages-menu';
import { MENU_ITEMS5 } from './pages-menu';
import { MENU_ITEMS6 } from './pages-menu';
import { MENU_ITEMS7 } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>  `,
})
export class PagesComponent {

  //menu = MENU_ITEMS;
  menu = [];

  constructor(){

  	var tipo_usuario = localStorage.getItem('mouvers_user_tipo');
    console.log(tipo_usuario);
  	if (tipo_usuario == '0') {
  		this.menu = MENU_ITEMS0;
  	}else if (tipo_usuario == '1') {
  		this.menu = MENU_ITEMS1;
  	}else if (tipo_usuario == '5') {
      this.menu = MENU_ITEMS5;
    }else if (tipo_usuario == '6') {
      this.menu = MENU_ITEMS6;
    }
  }

  
}
