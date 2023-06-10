import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private _date = new BehaviorSubject<Date>(new Date());
  public date = this._date.asObservable().pipe();

  constructor() { }

  setDate(date: Date) {
    this._date.next(date);
  }
}