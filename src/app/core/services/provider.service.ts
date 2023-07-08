import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderResume } from 'src/app/prestador/models/provider-resume.model';
import { environment } from 'src/environments/environment';
import { Security } from '../utils/security.util';
import { Observable, first, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  getProviders(): Observable<ProviderResume[]> {
    const url = `${environment.base_url}/v1/GenericView/providers`;
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);

    return this.http.get<ProviderResume[]>(url, { headers: httpHeader }).pipe(first());
  }

  getProvidersByName(name: string): Observable<ProviderResume[]> {

    if (name.length === 0) return of([]);

    const url = `${environment.base_url}/v1/GenericView/providers/query?name=${name}`;
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);

    return this.http.get<ProviderResume[]>(url, { headers: httpHeader }).pipe(first());
  }
}