import { Component } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-month-view-page',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent {

  day = new Date();
  constructor(private agendaService: AgendaService) {

    this.agendaService.selectedDay.subscribe({
      next: day => {
        this.day = day;
      }
    });
  }
}