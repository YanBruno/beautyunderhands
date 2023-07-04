import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda-page',
  templateUrl: './agenda-page.component.html',
  styleUrls: ['./agenda-page.component.css']
})
export class DashboardPageComponent {

  activeView = 1;

  constructor() {

  }

  changeActiveView(number: number) {
    this.activeView = number;
  }
}
