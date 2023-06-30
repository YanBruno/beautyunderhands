import { Component } from '@angular/core';
import { AgendaService } from '../../../services/agenda.service';
import { SchedulingItem } from '../../../models/schedulingItem.model';

@Component({
  selector: 'app-dashboard-agenda',
  templateUrl: './dashboard-agenda.component.html',
  styleUrls: ['./dashboard-agenda.component.css']
})
export class MonthViewComponent {

  showCalendar = false;
  agendamentos: SchedulingItem[] = [];
  private day = new Date();

  constructor(
    public agendaService: AgendaService
  ) {

    this.agendaService.selectedDay$.subscribe({
      next: day => {
        this.day = day;
        this.getSchedulingItems(day);
      }
    });
  }

  onShowCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  getSchedulingItems(day: Date) {
    this.agendaService.getSchedulingItems(day).subscribe({
      next: schedulings => {
        this.agendamentos = schedulings;
      },
      error: err => {

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