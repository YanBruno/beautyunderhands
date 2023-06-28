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

  day = new Date();

  agendamentos: SchedulingItem[] = [];

  constructor(
    private agendaService: AgendaService
    , private schedulingService: SchedulingService
  ) {

    this.agendaService.selectedDay.subscribe({
      next: day => {
        this.day = day;
        this.getSchedulingItems(this.day, 'FE226979-7B70-4D87-9496-E4385704448A');
      },
      error: err => {
        console.log(err);
      },
    });
  }

  setSelectedDay(calendarDay: Date) {
    this.agendaService.setSelectedDay(calendarDay);
  }

  getSchedulingItems(day: Date, unitId: string) {
    this.schedulingService.getSchedulingItems(day, unitId).subscribe({
      next: schedulings => {
        this.agendamentos = schedulings;
        console.log(schedulings);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}