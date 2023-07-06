import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SigninCredentials } from '../../models/signin-credentials.model';
import { AccountService } from '../../services/account.service';

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

  constructor(private fb: FormBuilder, private service: AccountService, private authService: AuthService) { }

  submit() {
    const credentials = this.form.value as SigninCredentials

    this.service.signIn(credentials).subscribe({
      next: result => {
        this.authService.handlerLogin(result);
      }
      , error: err => { }
    });
  }
}
