import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { RoleService } from '../../services/role.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  showSideBar = false;
  private sub = new Subscription();

  items: MenuItem[] = [
    { materialIcon: 'face', route: '/clientes', text: 'Clientes', roles: [1] } as MenuItem
    , { materialIcon: 'person', route: '/prestadores', text: 'Profissionais', roles: [1] } as MenuItem
    , { materialIcon: 'calendar_month', route: '/agenda', text: 'Agenda' } as MenuItem
  ];

  constructor(private roleService: RoleService) {

  }
  ngOnInit(): void {
    this.sub = this.roleService.role.subscribe({
      // implementar logica de exibicao de menus conforme role
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  changeShow() {
    this.showSideBar = !this.showSideBar;
  }
}
