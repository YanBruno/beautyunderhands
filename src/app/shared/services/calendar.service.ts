import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private _date = new BehaviorSubject<Date>(new Date());
  public date = this._date.asObservable();

  private _selectedDay = new BehaviorSubject<Date>(new Date());
  public selectedDay = this._selectedDay.asObservable();

  constructor() { }

  setDate(day: Date) {
    this._date.next(day);
  }

  setSelectedDay(day: Date) {
    this._selectedDay.next(day);
  }
}
