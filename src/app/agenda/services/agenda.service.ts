import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private selectedDaySubject = new BehaviorSubject<Date>(new Date());
  public selectedDay$ = this.selectedDaySubject.asObservable();

  constructor() { }

  setSelectedDay(day: Date) {
    this.selectedDaySubject.next(day);
  }
}