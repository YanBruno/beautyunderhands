import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private _date = new BehaviorSubject<Date>(new Date());
  public date = this._date.asObservable().pipe(
    // first()
  );

  constructor() {

  }

  setDate(day: Date) {
    this._date.next(day);
  }
}