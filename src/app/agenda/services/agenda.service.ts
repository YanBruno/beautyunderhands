import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SchedulingItem } from '../models/schedulingItem.model';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Security } from 'src/app/core/utils/security.util';

@Injectable()
export class AgendaService {

  private selectedDaySubject = new BehaviorSubject<Date>(new Date());
  public selectedDay$ = this.selectedDaySubject.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  setSelectedDay(day: Date) {
    this.selectedDaySubject.next(day);
  }

  getSchedulingItems(day: Date): Observable<SchedulingItem[]> {
    const url = `${environment.base_url}/v1/GenericView/items?day=${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}&unitId=${Security.getUnitId()}`;
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);


    return this
      .http
      .get<SchedulingItem[]>(url, { headers: httpHeader })
      .pipe(
        first()
      );
  }

  getSchedulingItem(id: string): Observable<SchedulingItem | null> {
    const url = `${environment.base_url}/v1/GenericView/item?schedulingItemId=${id}`
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);
    return this.http.get<SchedulingItem | null>(url, { headers: httpHeader }).pipe(first());
  }

}