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

  showCalendar = false;
  agendamentos: SchedulingItem[] = [];
  private day = new Date();

  constructor(
    public agendaService: AgendaService
    , private schedulingService: SchedulingService
  ) {

    this.agendaService.selectedDay$.subscribe({
      next: day => {
        this.day = day;
        this.getSchedulingItems(day, 'FE226979-7B70-4D87-9496-E4385704448A');
      }
    });
  }

  onShowCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  getSchedulingItems(day: Date, unitId: string) {
    this.schedulingService.getSchedulingItems(day, unitId).subscribe({
      next: schedulings => {
        this.agendamentos = schedulings;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onSelectedDate(date: Date) {
    this.agendaService.setSelectedDay(date);
    this.showCalendar = false;
  }

  onChangeDate(number: number): void {
    const d = this.day;
    d.setDate(d.getDate() + number);
    this.agendaService.setSelectedDay(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
  }
}