import { Component } from '@angular/core';
import { DateMoment } from '../../models/date-moment.model';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent {

  dates: DateMoment[] = [];
  date = new Date();

  constructor(private agendaService: AgendaService) {
    this.agendaService.date.subscribe({
      next: date => {
        this.date = date;
        this.loadDates();
      }
    });
  }

  loadDates() {
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
        , active: false
        , today: false
      } as DateMoment);
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      this.dates.push({
        day: i
        , month: this.date.getMonth()
        , year: this.date.getFullYear()
        , active: true
        , today: this.isToday(i)
      } as DateMoment);
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      this.dates.push({
        day: i - lastDayofMonth + 1
        , month: this.date.getMonth() + 1
        , year: this.date.getFullYear()
        , active: false
        , today: false
      } as DateMoment);
    }
  }

  changeDate(number: number) {
    const date = this.date;
    date.setMonth(this.date.getMonth() + number);
    this.agendaService.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
  }

  isToday(day: number): boolean {
    const today = new Date();
    return today.getDate() === day
      && today.getMonth() === this.date.getMonth()
      && today.getFullYear() === this.date.getFullYear();
  }
}