import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  items: MenuItem[] = [
    { materialIcon: 'account_circle', route: '/conta', text: 'Conta' } as MenuItem
    , { materialIcon: 'logout', route: '/login', text: 'Sair' } as MenuItem
  ];
  constructor() {

  }
}
