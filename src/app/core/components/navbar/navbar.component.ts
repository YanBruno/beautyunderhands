import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ContractContextService } from '../../services/contract-context.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  items: MenuItem[] = [
    { materialIcon: 'account_circle', route: '/conta', text: 'Conta' } as MenuItem
  ];

  constructor(private authService: AuthService, private contractContextService: ContractContextService) {

  }

  logout() {
    this.authService.logout();
  }

  showContracts() {
    this.contractContextService.showModal();
  }
}