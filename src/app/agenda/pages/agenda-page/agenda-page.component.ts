import { Component } from '@angular/core';
import { Security } from 'src/app/core/utils/security.util';

@Component({
  selector: 'app-agenda-page',
  templateUrl: './agenda-page.component.html',
  styleUrls: ['./agenda-page.component.css']
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
