import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  items: MenuItem[] = [
    { materialIcon: 'account_circle', route: '/conta', text: 'Conta' } as MenuItem
  ];

  constructor(private authService: AuthService, private contractService: ContractService) {

  }

  logout() {
    this.authService.logout();
  }

  showContracts() {
    this.contractService.showModal();
  }
}