import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {

  @Output() onSearch = new EventEmitter<string | null>();

  form = this.fb.group({
    text: ['', Validators.compose([
      Validators.minLength(3)
      , Validators.maxLength(80)
      , Validators.required
    ])]
  });

  constructor(private fb: FormBuilder) { }

  submit() {
    const { text } = this.form.value;
    this.onSearch.emit(text);
  }
}
