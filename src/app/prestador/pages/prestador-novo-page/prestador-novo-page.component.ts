import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProviderService } from '../../services/provider.service';
import { MessageService } from 'src/app/core/services/message.service';
import { Router } from '@angular/router';
import { CreatePerson } from 'src/app/core/models/create-person.model';

@Component({
  selector: 'app-prestador-novo-page',
  templateUrl: './prestador-novo-page.component.html',
  styleUrls: ['./prestador-novo-page.component.css']
})
export class PrestadorNovoPageComponent {

  form = this.fb.group({
    id: [{ value: '', disabled: true }],
    firstName: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ])],
    lastName: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ])],
    phoneNumber: ['', Validators.compose([
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ])],
    emailAddress: ['', Validators.compose([
      Validators.email
    ])],
    details: [''],
    password: ['', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(8)
    ])]
  });

  constructor(
    private providerService: ProviderService
    , private fb: FormBuilder
    , private messageService: MessageService
    , private route: Router
  ) { }

  ngOnInit(): void {

  }

  onSave(): void {
    const { valid, value } = this.form;

    if (valid) {
      const provider = value as CreatePerson;

      this.providerService.createProvider(provider).subscribe({
        next: result => {
          this.messageService.addFromResult(result);
          if (result.success)
            this.route.navigate(['/prestadores']);
        }
      });
    }
  }
}