import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit, OnDestroy {

  @Input() placeHolder = '';

  @Output() onSearch = new EventEmitter<string | null>();
  searchTerm$ = new Subject<string | null>();

  private subs = [] as Subscription[];

  form = this.fb.group({
    text: ['', Validators.compose([
      Validators.minLength(3)
      , Validators.maxLength(80)
      , Validators.required
    ])]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subs.push(
      this.searchTerm$.pipe(
        distinctUntilChanged(),
        debounceTime(600)
      ).subscribe({
        next: search => { this.onSearch.emit(search); }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  submit() {
    const { text } = this.form.value;
    this.searchTerm$.next(text!);
  }
}