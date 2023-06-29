import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Provider } from 'src/app/core/models/provider.model';
import { Security } from 'src/app/core/utils/security.util';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getProvider(): Observable<Provider> {

    const httpHeader = new HttpHeaders().set("Authorization", `Bearer ${Security.getToken()!}`);
    return this.http.get<Provider>(`${environment.base_url}/v1/provider`, { headers: httpHeader }).pipe(first());
  }
}
