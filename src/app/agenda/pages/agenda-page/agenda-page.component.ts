import { Component } from '@angular/core';
import { Security } from 'src/app/core/utils/security.util';

@Component({
  selector: 'app-agenda-page',
  templateUrl: './agenda-page.component.html',
  styleUrls: ['./agenda-page.component.css']
})
export class DashboardPageComponent {

  activeView = 1;

  changeActiveView(number: number) {
    this.activeView = number;
  }
}
