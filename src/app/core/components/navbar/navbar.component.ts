import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProviderService } from '../../services/provaider.service';
import { UnitContract } from '../../models/unitContract.model';
import { connect } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  items: MenuItem[] = [
    { materialIcon: 'account_circle', route: '/conta', text: 'Conta' } as MenuItem
  ];

  contracts: UnitContract[] = [];

  constructor(private authService: AuthService, private providerService: ProviderService) {

  }

  logout() {
    this.authService.logout();
  }

  showUnits() {
    this.providerService.getContracts().subscribe({
      next: result => {
        this.contracts = result;
      }
    });
  }
}
