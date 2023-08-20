import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Security } from '../../core/utils/security.util';
import { BehaviorSubject, Observable, first, of } from 'rxjs';
import { Provider } from 'src/app/core/models/provider.model';
import { GenericResponseResult } from 'src/app/core/models/genereic-response-result.model';
import { PersonResume } from 'src/app/core/models/person-resume.model';
import { CreatePerson } from 'src/app/core/models/create-person.model';
import { UnitContract } from 'src/app/core/models/unitContract.model';
import { Comission } from 'src/app/core/models/comission.model';

@Injectable()
export class ProviderService {

  constructor(private http: HttpClient) { }

  private _currentProvider = new BehaviorSubject<Provider | null>(null);
  currentProvider = this._currentProvider.asObservable();

  private _currentContract = new BehaviorSubject<UnitContract | null>(null);
  currentContract = this._currentContract.asObservable();

  private _currentComissions = new BehaviorSubject<Comission[] | null>(null);
  currentComissions = this._currentComissions.asObservable();

  private _currentComission = new BehaviorSubject<Comission | null>(null);
  currentComission = this._currentComission.asObservable();

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

  setCurrentProvider(provider: Provider | null): void {
    this._currentProvider.next(provider);

    this.setCurrentContract();
    this.setCurrentComissions();
  }

  setCurrentContract(): void {
    const provider = this._currentProvider.getValue();

    if (provider) {
      const unitId = Security.getUnitId();
      const contract = provider.contracts.filter(c => c.unit.id === unitId)[0];
      this._currentContract.next(contract);

      this.setCurrentComissions();

    }
  }

  setCurrentComissions(): void {
    const contract = this._currentContract.getValue();
    const provider = this._currentProvider.getValue();

    if (contract)
      if (provider) {
        const unitId = Security.getUnitId();
        const comissions = provider.comissions.filter(c => c.service.unit.id === unitId);
        this._currentComissions.next(comissions);
      }
  }

  setCurrentComission(comission: Comission | null): void {
    this._currentComission.next(comission);
  }
}