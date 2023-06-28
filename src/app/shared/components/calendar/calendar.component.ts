import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarItem } from '../../models/calendar-item.model';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  dates: CalendarItem[] = [];
  date = new Date();

  @Input() showCalendar = false;
  private selectedDay = new Date();

  constructor(private service: CalendarService) {
    this.service.date.subscribe({
      next: day => {
        this.date = day;
      }
    });

    this.service.selectedDay.subscribe({
      next: day => {
        this.selectedDay = day;
      }
    });

    this.loadDates();
    this.loadSelectedDay();
  }

  //renderiza os mês na tela
  loadDates() {
    const today = new Date();
    this.dates = [];

    const firstDayofMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    const lastDateofMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    const lastDayofMonth = new Date(this.date.getFullYear(), this.date.getMonth(), lastDateofMonth).getDay();
    const lastDateofLastMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();

    for (let i = firstDayofMonth; i > 0; i--) {
      this.dates.push({
        day: lastDateofLastMonth - i + 1
        , month: this.date.getMonth() - 1
        , year: this.date.getFullYear()
        , isInactive: true
        , isToday: false
        , isSelected: false
      } as CalendarItem);
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      this.dates.push({
        day: i
        , month: this.date.getMonth()
        , year: this.date.getFullYear()
        , isInactive: false
        , isToday: this.isToday(i)
      } as CalendarItem);
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      this.dates.push({
        day: i - lastDayofMonth + 1
        , month: this.date.getMonth() + 1
        , year: this.date.getFullYear()
        , isInactive: true
        , isToday: false
      } as CalendarItem);
    }

    this.loadSelectedDay();
  }

  changeDate(number: number) {
    const date = this.date;
    date.setMonth(this.date.getMonth() + number);

    // this.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    this.service.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()));

    this.loadDates();
  }

  isToday(day: number): boolean {
    const today = new Date();
    return today.getDate() === day
      && today.getMonth() === this.date.getMonth()
      && today.getFullYear() === this.date.getFullYear();
  }

  loadSelectedDay() {
    this.dates.map(
      day => {
        if (day.day === this.selectedDay.getDate() && day.month === this.selectedDay.getMonth() && day.year === this.selectedDay.getFullYear()) {
          day.isSelected = true;
        } else {
          day.isSelected = false;
        }
      }
    );
  }

  setDay(day: CalendarItem) {
    this.service.setSelectedDay(new Date(day.year, day.month, day.day));
    this.loadSelectedDay();
  }
}