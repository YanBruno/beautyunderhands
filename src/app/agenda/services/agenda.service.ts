import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private _date = new BehaviorSubject<Date>(new Date());
  public date = this._date.asObservable().pipe();

  private _day = new BehaviorSubject<Date>(new Date());
  public day = this._day.asObservable();

  constructor() { }

  setDate(date: Date) {
    this._date.next(date);
  }

  setDay(day: Date) {
    this._day.next(day);
  }
}