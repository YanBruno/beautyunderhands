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

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { }

  signIn(credentials: LoginCredentials): Observable<GenericResponseResult> {
    return this.http.post<GenericResponseResult>(`${environment.base_url}/v1/account/login/email`, credentials).pipe(first());
  }

  signUp(credentials: SignupCredentials): Observable<GenericResponseResult> {
    return this.http.post<GenericResponseResult>(`${environment.base_url}/v1/provider`, credentials).pipe(first());
  }

  logout(): void {
    Security.clear();
    this.updateLoggedIn();
    this.router.navigate(['/login']);
  }

  handlerLogin(result: GenericResponseResult) {
    if (result.success) {
      Security.setToken(result.data.token);
      this.updateLoggedIn();

      this.router.navigate(['/agenda']);
    }

    if (!result.success) {
      this.messageService.addFromResult(result);
    }
  }

  updateLoggedIn() {
    const token = Security.getToken();
    if (token) this.loggedIn.next(true);
    if (!token) this.loggedIn.next(false);
  }
}
