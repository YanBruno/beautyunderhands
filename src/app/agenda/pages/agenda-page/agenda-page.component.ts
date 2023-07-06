import { Component } from '@angular/core';
import { ContractContextService } from 'src/app/core/services/contract-context.service';

@Component({
  selector: 'app-agenda-page',
  templateUrl: './agenda-page.component.html',
  styleUrls: ['./agenda-page.component.css']
})
export class DashboardPageComponent {

  activeView = 1;

  constructor(public contractContextService: ContractContextService) {

  }

  changeActiveView(number: number) {
    this.activeView = number;
  }
}
