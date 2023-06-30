import { Component } from '@angular/core';
import { AgendaService } from '../../../services/agenda.service';

@Component({
  selector: 'app-dashboard-profissionais',
  templateUrl: './dashboard-profissionais.component.html',
  styleUrls: ['./dashboard-profissionais.component.css']
})
export class DayViewComponent {

  day = new Date();
  constructor(private agendaService: AgendaService) {
    this.agendaService.selectedDay$.subscribe({
      next: day => {
        this.day = day;
      }
    });
  }
}
