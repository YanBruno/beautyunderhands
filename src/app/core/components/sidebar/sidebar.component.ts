import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  items: MenuItem[] = [
    { materialIcon: 'face', route: '/clientes', text: 'Clientes' } as MenuItem
    , { materialIcon: 'calendar_month', route: '/agenda', text: 'Agenda' } as MenuItem
  ];
  constructor() {

  }
}
