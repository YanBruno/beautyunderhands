import { Component } from '@angular/core';
import { Security } from 'src/app/core/utils/security.util';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  activeView = this.isAdmin() ? 1 : 3;

  changeActiveView(number: number) {
    this.activeView = number;
  }

  isAdmin(): boolean {
    return Security.getRole() === "1" ? true : false;
  }
}
