import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, of } from 'rxjs';
import { Security } from 'src/app/core/utils/security.util';
import { environment } from 'src/environments/environment';
import { GenericResponseResult } from 'src/app/core/models/genereic-response-result.model';
import { Customer } from 'src/app/core/models/customer.model';
import { PersonResume } from 'src/app/core/models/person-resume.model';
import { CreatePerson } from 'src/app/core/models/create-person.model';

@Injectable()
export class ClienteService {


  constructor(private http: HttpClient) { }

  getCustomers(): Observable<PersonResume[]> {
    const url = `${environment.base_url}/v1/GenericView/customers`;
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);

    return this.http.get<PersonResume[]>(url, { headers: httpHeader }).pipe(first());
  }

  getCustomersByName(name: string): Observable<PersonResume[]> {

    if (name.length === 0) return of([]);

    const url = `${environment.base_url}/v1/GenericView/customers/query?name=${name}`;
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);

    return this.http.get<PersonResume[]>(url, { headers: httpHeader }).pipe(first());
  }

  getCustomer(id: string | null): Observable<Customer> {

    if (id) {
      const url = `${environment.base_url}/v1/Customer/${id}`;
      const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);

      return this.http.get<Customer>(url, { headers: httpHeader }).pipe(first());
    }

    return of();
  }

  createCustomer(createCliente: CreatePerson): Observable<GenericResponseResult> {
    const url = `${environment.base_url}/v1/Customer`;
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);

    return this.http.post<GenericResponseResult>(url, createCliente, { headers: httpHeader }).pipe(first());
  }
}
