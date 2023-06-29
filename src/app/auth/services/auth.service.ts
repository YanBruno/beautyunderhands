import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, first } from 'rxjs';
import { Credentials } from '../models/credentials.model';
import { environment } from 'src/environments/environment';
import { GenericResponseResult } from 'src/app/core/models/genereic-response-result.model';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { }

  signIn(credentials: Credentials) {
    return this.http.post<GenericResponseResult>(`${environment.base_url}/v1/account/login/email`, credentials).pipe(first());
  }
  signUp(): void { }

  handlerLogin(result: GenericResponseResult) {
    if (result.success) {
      localStorage.setItem('beautykey', result.data.token);
      this.updateLoggedIn();

      this.router.navigate(['/agenda']);
    }

    if (!result.success) {
      this.messageService.addFromResult(result);
    }
  }

  updateLoggedIn() {
    const token = localStorage.getItem('beautykey');
    if (token) this.loggedIn.next(true);
    if (!token) this.loggedIn.next(false);
  }
}
