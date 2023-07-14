import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  showSideBar = false;

  items: MenuItem[] = [
    { materialIcon: 'face', route: '/clientes', text: 'Clientes' } as MenuItem
    , { materialIcon: 'person', route: '/prestadores', text: 'Profissionais' } as MenuItem
    , { materialIcon: 'calendar_month', route: '/agenda', text: 'Agenda' } as MenuItem
  ];

  constructor() {

  }

  changeShow() {
    this.showSideBar = !this.showSideBar;
  }
}
