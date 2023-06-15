import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private _selectedDay = new BehaviorSubject<Date>(new Date());
  public selectedDay = this._selectedDay.asObservable();

  constructor() { }

  setSelectedDay(day: Date) {
    this._selectedDay.next(day);
  }
}