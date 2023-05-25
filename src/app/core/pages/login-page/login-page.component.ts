import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  form = this.fb.group({
    email: ['', Validators.compose([
      Validators.email
      , Validators.required
    ])]
    , password: ['', Validators.compose([
      Validators.maxLength(8)
      , Validators.required
    ])]
  });

  constructor(private fb: FormBuilder, private router: Router) {
  }

  submit() {
    this.router.navigate(['/agenda']);
  }
}
