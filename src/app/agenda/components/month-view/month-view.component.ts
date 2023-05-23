import { Component } from '@angular/core';
import { CalendarDay } from '../../models/calendar-day.model';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent {

  date: Date = new Date();
  days: CalendarDay[] = [];
  firstWeekDay = 0;

  constructor(private agendaService: AgendaService) {
    this.agendaService.selectedDay.subscribe({
      next: result => { this.date = result; this.setTotalDays(); }
    });

  }

  setSelectedDay(day: CalendarDay) {
    this.agendaService.setSelectedDay(new Date(day.year, day.month, day.day));
  }

  changeMonth(goTo: number) {
    this.date = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + goTo,
      this.date.getDate()
    )

    this.setTotalDays();
  }

  setTotalDays() {
    this.days = [];
    const maxDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    this.firstWeekDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();

    const today = new Date();

    console.log(this.date);

    for (let index = 1; index <= maxDay; index++) {

      const day = {
        day: index
        , month: this.date.getMonth()
        , year: this.date.getFullYear()
        , isToday: false
        , isSelected: false
      } as CalendarDay

      day.isToday =
        day.day === today.getDate()
        && day.month === today.getMonth()
        && day.year === today.getFullYear();

      day.isSelected =
        day.day === this.date.getDate()
        && day.month === this.date.getMonth()
        && day.year === this.date.getFullYear();

      this.days.push(
        day
      )
    }
  }

  printDate() {
    console.log(this.date);
    console.log(this.days);
  }
}
