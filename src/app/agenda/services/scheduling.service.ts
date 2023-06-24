import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SchedulingItem } from '../models/schedulingItem.model';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  private urlBase = environment.base_url;
  private schedulingItems = "/v1/Scheduling/items?day=2023-06-10&unitId=4644D6E1-A352-4003-A1D1-B597B5AE1B65";

  constructor(private http: HttpClient) { }

  getSchedulingItems(): Observable<SchedulingItem[]> {
    return this.http.get<SchedulingItem[]>(`${this.urlBase}${this.schedulingItems}`).pipe(first());
  }
}