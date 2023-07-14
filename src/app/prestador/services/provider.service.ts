import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Security } from '../../core/utils/security.util';
import { Observable, first, of } from 'rxjs';
import { Provider } from 'src/app/core/models/provider.model';
import { GenericResponseResult } from 'src/app/core/models/genereic-response-result.model';
import { PersonResume } from 'src/app/core/models/person-resume.model';
import { CreatePerson } from 'src/app/core/models/create-person.model';

@Injectable()
export class ProviderService {

  constructor(private http: HttpClient) { }

  getProviders(): Observable<PersonResume[]> {
    const url = `${environment.base_url}/v1/GenericView/providers`;
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);

    return this.http.get<PersonResume[]>(url, { headers: httpHeader }).pipe(first());
  }

  getProvidersByName(name: string): Observable<PersonResume[]> {

    if (name.length === 0) return of([]);

    const url = `${environment.base_url}/v1/GenericView/providers/query?name=${name}`;
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);

    return this.http.get<PersonResume[]>(url, { headers: httpHeader }).pipe(first());
  }

  getProvider(id: string | null): Observable<Provider> {

    if (id) {
      const url = `${environment.base_url}/v1/Provider/${id}`;
      const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);

      return this.http.get<Provider>(url, { headers: httpHeader }).pipe(first());
    }

    return of();
  }

  createProvider(createProvider: CreatePerson): Observable<GenericResponseResult> {
    const url = `${environment.base_url}/v1/provider`;
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);

    return this.http.post<GenericResponseResult>(url, createProvider, { headers: httpHeader }).pipe(first());
  }
}