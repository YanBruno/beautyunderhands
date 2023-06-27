import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SchedulingItem } from '../models/schedulingItem.model';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor(private http: HttpClient) { }

  getSchedulingItems(): Observable<SchedulingItem[]> {

    console.log(environment.base_url);
    return this.http.get<SchedulingItem[]>(`${environment.base_url}/v1/Scheduling/items?day=2023-06-10&unitId=4644D6E1-A352-4003-A1D1-B597B5AE1B65`).pipe(first());
  }
}