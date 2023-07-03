import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginCredentials } from '../../models/login-credentials.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

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
    const credentials = this.form.value as LoginCredentials

    this.service.signIn(credentials).subscribe({
      next: result => {
        this.service.handlerLogin(result);
      }
      , error: err => { }
    });
  }
}
