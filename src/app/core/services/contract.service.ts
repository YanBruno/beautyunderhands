import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { UnitContract } from '../models/unitContract.model';
import { environment } from 'src/environments/environment';
import { Security } from '../utils/security.util';
import { GenericResponseResult } from '../models/genereic-response-result.model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  getContracts(): Observable<UnitContract[]> {
    const url = `${environment.base_url}/v1/provider/contracts`;
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);

    return this.http.get<UnitContract[]>(url, { headers: httpHeader }).pipe(first());
  }

  updatePrincipalContract(contract: UnitContract): Observable<GenericResponseResult> {
    const url = `${environment.base_url}/v1/provider/contract/principal`;
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);
    const body = { unitId: contract.unit.id };

    return this.http.put<GenericResponseResult>(url, body, { headers: httpHeader }).pipe(first());
  }
}
