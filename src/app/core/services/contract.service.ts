import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, first } from 'rxjs';
import { UnitContract } from '../models/unitContract.model';
import { environment } from 'src/environments/environment';
import { Security } from '../utils/security.util';
import { GenericResponseResult } from '../models/genereic-response-result.model';
import { MessageService } from './message.service';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private hasContractContextSubject = new BehaviorSubject<boolean>(false);
  public hasContractContext = this.hasContractContextSubject.asObservable();

  private isShowModalBehavior = new BehaviorSubject<boolean>(false);
  public isShowModal = this.isShowModalBehavior.asObservable();

  constructor(private http: HttpClient, private messageService: MessageService, private roleService: RoleService) { }

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

  handlerContractContext(result: GenericResponseResult): void {
    if (result.success) {
      const token = result.data.token;
      const contract = result.data.contract;

      Security.clear();
      if (contract)
        Security.setContract(contract);

      Security.setToken(token);

      this.updateContractContext();
      this.roleService.updateRole();

      this.hideModal();
    }

    if (!result.success) {
      this.messageService.addFromResult(result);
    }
  };

  updateContractContext() {
    this.hasContractContextSubject.next(Security.hasContract());
  };

  showModal(): void { this.isShowModalBehavior.next(true) };
  hideModal(): void { this.isShowModalBehavior.next(false) };
}
