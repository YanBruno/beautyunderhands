import { Component } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-month-view-page',
  templateUrl: './month-view-page.component.html',
  styleUrls: ['./month-view-page.component.css']
})
export class MonthViewPageComponent {

  day = new Date(2022, 5, 10);
  constructor(private agendaService: AgendaService) {

    this.agendaService.day.subscribe({
      next: day => {
        this.day = day;
      }
    });
  }
}
