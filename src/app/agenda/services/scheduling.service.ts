import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SchedulingItem } from '../models/schedulingItem.model';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Security } from 'src/app/core/utils/security.util';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor(private http: HttpClient) { }

  getSchedulingItems(day: Date): Observable<SchedulingItem[]> {
    const url = `${environment.base_url}/v1/Scheduling/items?day=${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}&unitId=${Security.getUnit()}`;
    return this.http.get<SchedulingItem[]>(url).pipe(first());
  }

  getSchedulingItem(id: string): Observable<SchedulingItem> {
    return this.http.get<SchedulingItem>(`${environment.base_url}/v1/Scheduling/item?schedulingItemId=${id}`).pipe(first());
  }
}