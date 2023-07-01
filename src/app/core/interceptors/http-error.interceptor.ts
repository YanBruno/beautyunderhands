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

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401)
          this.messageService.add(
            { title: 'Acesso negado', success: false } as Message
          )
        else {
          this.messageService.add(
            { title: error.message, success: false } as Message
          )
        };

        return throwError(() => new Error(error.error))
      })
    );
  }
}
