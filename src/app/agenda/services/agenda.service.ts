import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private _selectedDay = new BehaviorSubject<Date>(new Date());
  public selectedDay = this._selectedDay.asObservable().pipe(
    // first()
  );

  constructor() {

  }

  setSelectedDay(day: Date) {
    this._selectedDay.next(day);
  }
}