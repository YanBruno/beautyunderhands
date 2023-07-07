import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GenericResponseResult } from '../models/genereic-response-result.model';
import { Security } from '../utils/security.util';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContractContextService {

  private hasContractContextSubject = new BehaviorSubject<boolean>(false);
  public hasContractContext = this.hasContractContextSubject.asObservable();

  private isShowModalBehavior = new BehaviorSubject<boolean>(false);
  public isShowModal = this.isShowModalBehavior.asObservable();

  constructor(private messageService: MessageService) { }

  handlerContractContext(result: GenericResponseResult): void {
    if (result.success) {
      const token = result.data.token;
      const contract = result.data.contract;

      Security.clear();
      if (contract)
        Security.setContract(contract);

      Security.setToken(token);

      this.updateContractContext();
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