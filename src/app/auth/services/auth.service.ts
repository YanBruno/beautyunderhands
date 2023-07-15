import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GenericResponseResult } from 'src/app/core/models/genereic-response-result.model';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/services/message.service';
import { Security } from 'src/app/core/utils/security.util';
import { RoleService } from 'src/app/core/services/role.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();

  constructor(private router: Router, private messageService: MessageService, private roleService: RoleService) { }

  logout(): void {
    Security.clear();
    this.updateLoggedIn();
    this.router.navigate(['/entrar']);
  }

  handlerLogin(result: GenericResponseResult): void {
    if (result.success) {

      const token = result.data.token;
      const contract = result.data.contract;

      if (contract)
        Security.setContract(contract);

      Security.setToken(token);

      this.updateLoggedIn();
      this.roleService.updateRole();
      this.router.navigate(['/agenda']);
    }

    if (!result.success) {
      this.messageService.addFromResult(result);
    }
  }

  updateLoggedIn() {
    this.loggedIn.next(Security.hasToken());
  }
}
