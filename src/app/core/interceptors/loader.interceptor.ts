import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  private activeRequest = 0;
  constructor(private loaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.activeRequest === 0) this.loaderService.isLoading();

    this.activeRequest++;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequest--;
        if (this.activeRequest === 0) this.loaderService.isNotLoading();
      })
    );
  }
}