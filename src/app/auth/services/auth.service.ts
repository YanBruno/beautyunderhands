import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, first } from 'rxjs';
import { LoginCredentials } from '../models/login-credentials.model';
import { environment } from 'src/environments/environment';
import { GenericResponseResult } from 'src/app/core/models/genereic-response-result.model';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/services/message.service';
import { Security } from 'src/app/core/utils/security.util';
import { SignupCredentials } from '../models/signup-credentials.model';
import { Role } from 'src/app/core/models/role.model';
import { Unit } from 'src/app/core/models/unit.model';
import { Message } from 'src/app/core/models/message.model';
import { MessageNotification } from 'src/app/core/models/message-notification.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { }

  signIn(credentials: LoginCredentials): Observable<GenericResponseResult> {
    return this.http.post<GenericResponseResult>(`${environment.base_url}/v1/provider/login`, credentials).pipe(first());
  }

  signUp(credentials: SignupCredentials): Observable<GenericResponseResult> {
    return this.http.post<GenericResponseResult>(`${environment.base_url}/v1/provider`, credentials).pipe(first());
  }

  logout(): void {
    Security.clear();
    this.updateLoggedIn();
    this.router.navigate(['/entrar']);
  }

  handlerLogin(result: GenericResponseResult): void {
    if (result.success) {

      if (result.data.provider.contracts.length === 0) {
        this.messageService.add({
          title: `Olá ${result.data.provider.name.firstName}`
          , notifications: [{
            key: 'handlerLogin'
            , message: 'Sua conta foi criada com sucesso, em breve você terá acesso ao sistema'
          } as MessageNotification] as MessageNotification[]
        } as Message
        );
        // this.router.navigate(['/entrar']);
      } else {
        const token = result.data.token;
        const role = result.data.provider.contracts[0]?.roleType as Role
        const unit = result.data.provider.contracts[0]?.unit as Unit

        Security.setDefaultData(token, role, unit);
        this.updateLoggedIn();
        this.router.navigate(['/agenda']);
      }
    }

    if (!result.success) {
      this.messageService.addFromResult(result);
    }
  }

  updateLoggedIn() {
    this.loggedIn.next(Security.hasData());
  }
}