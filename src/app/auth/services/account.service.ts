import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SigninCredentials } from 'src/app/auth/models/signin-credentials.model';
import { GenericResponseResult } from '../../core/models/genereic-response-result.model';
import { Observable, first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignupCredentials } from 'src/app/auth/models/signup-credentials.model';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  signIn(credentials: SigninCredentials): Observable<GenericResponseResult> {
    return this.http.post<GenericResponseResult>(`${environment.base_url}/v1/provider/login`, credentials).pipe(first());
  }

  signUp(credentials: SignupCredentials): Observable<GenericResponseResult> {
    return this.http.post<GenericResponseResult>(`${environment.base_url}/v1/provider`, credentials).pipe(first());
  }
}
