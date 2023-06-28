import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  isLoading(): void {
    this.loadingSubject.next(true);
  }

  isNotLoading(): void {
    this.loadingSubject.next(false);
  }
}
