import { Component } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent {

  day = new Date();
  constructor(private agendaService: AgendaService) {
    this.agendaService.selectedDay.subscribe({
      next: day => {
        this.day = day;
      }
    });
  }
}
