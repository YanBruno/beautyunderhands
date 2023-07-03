import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UnitContract } from '../models/unitContract.model';
import { Security } from '../utils/security.util';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  getContracts(): Observable<UnitContract[]> {
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);
    const url = `${environment.base_url}/v1/provider/contracts`
    return this.http.get<UnitContract[]>(url, { headers: httpHeader }).pipe(first());
  }
}
