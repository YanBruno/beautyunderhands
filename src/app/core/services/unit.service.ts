import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Unit } from '../models/unit.model';
import { Security } from '../utils/security.util';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) { }

  getAvailablesByProvider(): Observable<Unit[]> {
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);
    const url = `${environment.base_url}/v1/Unit/provider`
    return this.http.get<Unit[]>(url, { headers: httpHeader }).pipe(first());
  }
}