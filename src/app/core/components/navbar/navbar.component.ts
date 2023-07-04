import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UnitService } from '../../services/unit.service';
import { Security } from '../../utils/security.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  items: MenuItem[] = [
    { materialIcon: 'account_circle', route: '/conta', text: 'Conta' } as MenuItem
  ];

  constructor(private authService: AuthService, private unitService: UnitService) {
    if (!Security.getUnit())
      this.unitService.showModal();
  }

  logout() {
    this.authService.logout();
  }

  showUnits() {
    this.unitService.showModal();
  }
}