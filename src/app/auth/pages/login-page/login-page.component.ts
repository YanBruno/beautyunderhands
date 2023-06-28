import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Credentials } from '../../models/credentials.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  form = this.fb.group({
    username: ['', Validators.compose([
      Validators.email
      , Validators.required
    ])]
    , password: ['', Validators.compose([
      // Validators.minLength(6)
      , Validators.required
    ])]
  });

  constructor(private fb: FormBuilder, private service: AuthService) {
  }

  submit() {

    const credentials = this.form.value as Credentials

    this.service.signIn(credentials).subscribe({
      next: result => {
        this.service.handlerLogin(result);
      }
      , error: err => { }
    });
  }
}
