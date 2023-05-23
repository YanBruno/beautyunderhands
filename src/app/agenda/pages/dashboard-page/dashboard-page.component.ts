import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  // 1 = month
  // 2 = week
  // 3 = day

  activeView = 1;

  changeActiveView(number: number) {
    this.activeView = number;
  }
}
