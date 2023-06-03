import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  items: MenuItem[] = [
    { materialIcon: 'account_circle', route: '/conta', text: 'Conta' } as MenuItem
  ];
  constructor(private router: Router) {

  }

  logout() {
    this.router.navigate(['login']);
  }

  showUnits() { }
}
