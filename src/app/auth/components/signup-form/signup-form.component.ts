import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SignupCredentials } from '../../models/signup-credentials.model';
import { AccountService } from '../../services/account.service';
import { MessageService } from 'src/app/core/services/message.service';
import { Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private messageService: MessageService,
    private route: Router
  ) {

  }

  submit() {
    if (this.form.valid)
      this.accountService.signUp(this.form.value as SignupCredentials).subscribe({
        next: result => {
          this.messageService.addFromResult(result);

          if (result.success) {
            this.route.navigate(['/entrar']);
          }

          if (!result.success) { }

        }
        , error: err => {

        }
      })
  }
}