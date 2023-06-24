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
        this.getSchedulingItems();
      }
    });
  }

  setSelectedDay(calendarDay: Date) {
    this.agendaService.setSelectedDay(calendarDay);
  }

  getSchedulingItems() {
    this.schedulingService.getSchedulingItems().subscribe(
      schedulings => {
        this.agendamentos = schedulings;
      }
    );
  }
}