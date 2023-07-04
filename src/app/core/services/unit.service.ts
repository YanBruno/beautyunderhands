import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, first } from 'rxjs';
import { Unit } from '../models/unit.model';
import { Security } from '../utils/security.util';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private _showModal = new BehaviorSubject<boolean>(false);
  public isShowModal = this._showModal.asObservable();

  private _selectedUnit = new BehaviorSubject<string | null>(Security.getUnit());
  public isSelectedUnit = this._selectedUnit.asObservable();

  constructor(private http: HttpClient) { }

  getByProviderId(): Observable<Unit[]> {
    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()}`);
    return this.http.get<Unit[]>(`${environment.base_url}/v1/unit/all`, { headers: httpHeader }).pipe(first());
  }

  showModal(): void {
    this._showModal.next(true);
  }

  hideModal(): void {
    this._showModal.next(false);
  }

  setUnit(unitId: string): void {
    Security.setUnit(unitId);
    this._selectedUnit.next(unitId);
    this.handleModal();
  }

  handleModal(): void {
    if (!Security.getUnit())
      this.showModal();

    if (Security.getUnit())
      this.hideModal();
  }
}