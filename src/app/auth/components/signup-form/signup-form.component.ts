import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SignupCredentials } from '../../models/signup-credentials.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = this.fb.group({
    firstName: ['', Validators.compose([
      Validators.minLength(3)
      , Validators.maxLength(15)
      , Validators.required
    ])]
    , lastName: ['', Validators.compose([
      Validators.minLength(3)
      , Validators.maxLength(15)
      , Validators.required
    ])]
    , phoneNumber: ['', Validators.compose([
      Validators.maxLength(11)
      , Validators.minLength(11)
      , Validators.required
    ])]
    , emailAddress: ['', Validators.compose([
      Validators.email
      , Validators.required
    ])]
    , password: ['', Validators.compose([
      Validators.minLength(8)
      , Validators.maxLength(10)
      , Validators.required
    ])]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {

  }

  submit() {
    if (this.form.valid)
      this.authService.signUp(this.form.value as SignupCredentials).subscribe({
        next: result => {
          this.authService.handlerLogin(result);
        }
        , error: err => {

        }
      })
  }
}
