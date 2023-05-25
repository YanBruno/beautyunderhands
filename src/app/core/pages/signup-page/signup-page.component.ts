import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  form = this.fb.group({
    name: ['', Validators.compose([
      Validators.minLength(3)
      , Validators.maxLength(50)
      , Validators.required
    ])]
    , email: ['', Validators.compose([
      Validators.email
      , Validators.required
    ])]
    , password: ['', Validators.compose([
      Validators.minLength(8)
      , Validators.maxLength(10)
      , Validators.required
    ])]
  });

  constructor(private fb: FormBuilder) {

  }


  submit() { }
}
