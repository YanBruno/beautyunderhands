import { Component } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-month-view-page',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent {

  day = new Date(2022, 5, 10);
  constructor(private agendaService: AgendaService) {

    this.agendaService.selectedDay.subscribe({
      next: day => {
        this.day = day;
      }
    });
  }
}