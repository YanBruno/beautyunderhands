import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService, private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // this.messageService.add(
          //   { title: 'Acesso negado', success: false, notifications: [{ key: "1", message: "Por favor, realize login novamente." }] } as Message
          // )
          this.authService.logout();
        }

        if (error.status === 403) {
          this.messageService.add(
            { title: 'Acesso não autorizado', success: false, notifications: [{ key: "1", message: "Você não tem acesso a esta funcionalidade" }] } as Message
          )
        }
        return throwError(() => error);
      })
    );
  }
}