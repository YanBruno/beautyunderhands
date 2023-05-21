import { Component } from '@angular/core';
import { CalendarDay } from '../../models/month-day.model';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent {

  date: Date = new Date();
  days: CalendarDay[] = [];
  firstWeekDay = 0;

  constructor() {
    this.setTotalDays();
  }

  nextMonth() {
    this.date = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      this.date.getDate()
    )

    this.setTotalDays();
  }

  prevMonth() {
    this.date = new Date(
      this.date.getFullYear(),
      this.date.getMonth() - 1,
      this.date.getDate()
    )

    this.setTotalDays();
  }

  setTotalDays() {
    this.days = [];
    const maxDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    this.firstWeekDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();

    const date = new Date();

    for (let index = 1; index <= maxDay; index++) {

      const day = {
        day: index
        , month: this.date.getMonth()
        , year: this.date.getFullYear()
        , isToday: false
      } as CalendarDay

      day.isToday =
        day.day === date.getDate()
        && day.month === date.getMonth()
        && day.year === date.getFullYear();

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
