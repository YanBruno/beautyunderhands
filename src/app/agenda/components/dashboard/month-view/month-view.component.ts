import { Component } from '@angular/core';
import { AgendaService } from '../../../services/agenda.service';
import { SchedulingItem } from '../../../models/schedulingItem.model';
import { SchedulingService } from '../../../services/scheduling.service';

@Component({
  selector: 'app-month-view-page',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent {

  day = new Date(2023, 5, 10);

  agendamentos: SchedulingItem[] = [];

  constructor(
    private agendaService: AgendaService
    , private schedulingService: SchedulingService
  ) {

    this.agendaService.selectedDay.subscribe({
      next: day => {
        // this.day = day;
        this.getSchedulingItems(this.day, '4644D6E1-A352-4003-A1D1-B597B5AE1B65');
      }
    });
  }

  setSelectedDay(calendarDay: Date) {
    this.agendaService.setSelectedDay(calendarDay);
  }

  getSchedulingItems(day: Date, unitId: string) {
    this.schedulingService.getSchedulingItems(day, unitId).subscribe(
      schedulings => {
        this.agendamentos = schedulings;
      }
    );
  }
}